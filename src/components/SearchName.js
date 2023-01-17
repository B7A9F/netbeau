import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../libs/Input";
import { C } from "../constants";
import useDebounce from "../hooks/useDebounce";
import useFirstRender from "../hooks/useFirstRender";
const SearchName = ({ names, setNames }) => {
  const [searchParams, setSearchParams] = useSearchParams({ filter: "" });
  const debouncedSearch = useDebounce(searchParams, 300);
  const firstRender = useFirstRender();

  const findNames = () => {
    const result = names.filter((e) => {
      return e.name
        .toLowerCase()
        .includes(searchParams.get(C.FILTER).toLowerCase());
    });
    if (searchParams.get(C.FILTER).length > 0) {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams({ ...params, [C.RESULTS]: JSON.stringify(result) });
    }
    setNames(result);
  };

  useEffect(() => {
    //it makes no sense to call the function if:
    //is the first render and the data is saved in the url
    //the data is not yet loaded from the server
    //we don't have any string as a filter
    if (
      (!firstRender || !searchParams.has(C.RESULTS)) &&
      names.length !== 0 &&
      searchParams.get(C.FILTER) !== ""
    )
      findNames();
    //if we don't have the data in the url and we don't have any text as a filter,
    //we will use the data loaded from the server
    if (!searchParams.has(C.RESULTS) && !searchParams.get(C.FILTER))
      setNames(names);
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

export default React.memo(SearchName);
