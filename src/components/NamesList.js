import React from "react";
import Card from "../libs/Card";
import CardList from "../libs/CardList";
const NamesList = ({ names }) => {
  return (
    <CardList>
      {names.map((e) => {
        return <Card key={e.id}>{e.name}</Card>;
      })}
    </CardList>
  );
};

export default NamesList;
