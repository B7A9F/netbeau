import React, { useState } from "react";
import { namesCollectionRef } from "../utils/firebase-config";
import { addDoc } from "firebase/firestore";
import { C, dataset } from "../constants";
import Button from "../libs/Button";

const LoadDataSet = ({ names, setNames, setBackup, setLoading }) => {
  const loadDataSet = async () => {
    const result = dataset.map(async (e) => {
      setLoading(true);
      const response = await addDoc(namesCollectionRef, { name: e });
      return { name: e, id: response.id };
    });

    Promise.all(result).then((values) => {
      setNames([...names, ...values]);
      setBackup([...names, ...values]);
      setLoading(false);
    });
  };

  return <Button onClick={loadDataSet}>{C.LOAD_DATASET}</Button>;
};

export default LoadDataSet;
