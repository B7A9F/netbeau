import React, { useState, useEffect } from "react";
import { namesCollectionRef } from "./utils/firebase-config";
import { getDocs } from "firebase/firestore";
import { useSearchParams } from "react-router-dom";
import useFirstRender from "./hooks/useFirstRender";

import AddName from "./components/AddName";
import Header from "./components/Header";
import NamesList from "./components/NamesList";
import MainContent from "./libs/MainContent";
import Loader from "./libs/Loader";
import { C } from "./constants";

const App = () => {
  const [names, setNames] = useState([]);
  const [backup, setBackup] = useState([]);
  const [loading, setLoading] = useState(false);
  const firstRender = useFirstRender();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getNames = async () => {
      setLoading(true);
      const data = await getDocs(namesCollectionRef);
      const formatedData = data.docs.map((e) => ({ ...e.data(), id: e.id }));
      setBackup(formatedData);
      if (!searchParams.has(C.RESULTS)) setNames(formatedData);
      setLoading(false);
    };

    getNames();
    //if we have the data saved in the url, we will use the data from the url
    if (firstRender && searchParams.has(C.RESULTS)) {
      setNames(JSON.parse(searchParams.get(C.RESULTS)));
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <MainContent>
      <Header
        setNames={setNames}
        setBackup={setBackup}
        names={names}
        setLoading={setLoading}
        backup={backup}
      />

      <AddName
        setNames={setNames}
        names={names}
        setBackup={setBackup}
        setLoading={setLoading}
      />
      <NamesList names={names} />
    </MainContent>
  );
};

export default App;
