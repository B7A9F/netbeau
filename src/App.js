import React, { useState, useEffect } from "react";
import { namesCollectionRef } from "./utils/firebase-config";
import { getDocs } from "firebase/firestore";

import AddName from "./components/AddName";
import Header from "./components/Header";
import NamesList from "./components/NamesList";

import MainContent from "./libs/MainContent";

const App = () => {
  const [names, setNames] = useState([]);
  const [backup, setBackup] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNames = async () => {
      setLoading(true);
      const data = await getDocs(namesCollectionRef);
      const formatedData = data.docs.map((e) => ({ ...e.data(), id: e.id }));
      setNames(formatedData);
      setBackup(formatedData);
      setLoading(false);
    };
    getNames();
  }, []);
  if (loading) return <div>loading...</div>;
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
