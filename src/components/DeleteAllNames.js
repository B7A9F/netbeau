import React from "react";
import { db } from "../utils/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { C } from "../constants";
import Button from "../libs/Button";

const DeleteAllNames = ({ setNames, setBackup, names, setLoading }) => {
  const deleteAllNames = async () => {
    const result = names.map(async (e) => {
      setLoading(true);
      const nameDoc = doc(db, C.NAMES, e.id);
      return await deleteDoc(nameDoc);
    });
    Promise.all(result).then((values) => {
      setNames([]);
      setBackup([]);
      setLoading(false);
    });
  };

  return <Button onClick={deleteAllNames}>{C.DELETE_ALL_NAMES}</Button>;
};

export default DeleteAllNames;
