import React, { useState } from "react";
import styled from "@emotion/styled";
import { addDoc } from "firebase/firestore";

import { namesCollectionRef } from "../utils/firebase-config";

import { C } from "../constants";
import Button from "../libs/Button";
import Input from "../libs/Input";

const CenterItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const AddName = ({ names, setNames, setLoading, setBackup }) => {
  const [newName, setNewName] = useState("");

  const addName = async () => {
    setLoading(true);
    const response = await addDoc(namesCollectionRef, { name: newName });
    setNames([...names, { name: newName, id: response.id }]);
    setBackup([...names, { name: newName, id: response.id }]);
    setNewName("");
    setLoading(false);
  };

  return (
    <CenterItems>
      <Input
        placeholder={C.ADD_NAME_PLACEHOLDER}
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <Button onClick={addName}>{C.ADD_NAME}</Button>
    </CenterItems>
  );
};

export default AddName;
