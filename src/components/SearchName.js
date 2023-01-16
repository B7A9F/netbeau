import React, { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../libs/Input";
import { C } from "../constants";
import useDebounce from "../hooks/useDebounce";
const SearchName = ({ names, setNames }) => {
  const [searchParams, setSearchParams] = useSearchParams({ filter: "" });
  const debouncedSearch = useDebounce(searchParams, 300);
  const findNames = () => {
    const result = names.filter((e) => {
      return e.name
        .toLowerCase()
        .includes(searchParams.get(C.FILTER).toLowerCase());
    });
    setNames(result);
  };

  useEffect(() => {
    findNames();
  }, [debouncedSearch]);

  return (
    <Input
      width="50%"
      placeholder={C.SEARCH_PLACEHOLDER}
      value={searchParams.get(C.FILTER)}
      onChange={(e) => {
        setSearchParams({ filter: e.target.value });
      }}
    />
  );
};

export default SearchName;
