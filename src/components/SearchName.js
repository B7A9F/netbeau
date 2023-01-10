import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../libs/Input";

import { C } from "../constants";
const SearchName = ({ names, setNames }) => {
  const [searchParams, setSearchParams] = useSearchParams({ filter: "" });
  const findNames = () => {
    const result = names.filter((a) => {
      return a.name
        .toLowerCase()
        .includes(searchParams.get(C.FILTER).toLowerCase());
    });
    setNames(result);
  };
  console.log(searchParams.get(C.FILTER));
  useEffect(() => {
    findNames();
  }, [searchParams]);

  return (
    <Input
      width="50%"
      placeholder={C.SEARCH_PLACEHOLDER}
      value={searchParams.get(C.FILTER)}
      onChange={(e) => {
        setSearchParams({ filter: e.target.value });
        findNames();
      }}
    />
  );
};

export default SearchName;
