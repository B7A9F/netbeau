import React from "react";
import styled from "@emotion/styled";

import LoadDataSet from "./LoadDataSet";
import DeleteAllNames from "./DeleteAllNames";
import SearchName from "./SearchName";

const CenterItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Header = ({ setNames, names, setLoading, backup, setBackup }) => {
  return (
    <CenterItems>
      <LoadDataSet
        setNames={setNames}
        setBackup={setBackup}
        names={names}
        setLoading={setLoading}
      />
      <SearchName setNames={setNames} names={backup} setLoading={setLoading} />
      <DeleteAllNames
        setNames={setNames}
        setBackup={setBackup}
        names={names}
        setLoading={setLoading}
      />
    </CenterItems>
  );
};

export default Header;
