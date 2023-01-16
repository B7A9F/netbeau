import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Main = styled.div`
  max-width: 960px;
  margin: 200px auto;
  display: flex;
  justify-content: space-around;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const spinnerUpper = keyframes`
  0% { transform: rotate(0deg); border-width: 10px; }
  50% { transform: rotate(180deg); border-width: 1px; }
  100% { transform: rotate(360deg); border-width: 10px; }
`;

const spinnerLower = keyframes`
  0% { transform: rotate(0deg); border-width: 1px; }
  50% { transform: rotate(180deg); border-width: 10px; }
  100% { transform: rotate(360deg); border-width: 1px; }
`;

const Upper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  border-top-color: #513a89;
  border-radius: 50%;
  animation: ${spinnerUpper} 1.2s linear infinite; ;
`;

const Lower = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  border-bottom-color: #513a89;
  border-radius: 50%;
  animation: ${spinnerLower} 1.2s linear infinite; ;
`;

const Loader = () => {
  return (
    <Main>
      <Spinner>
        <Upper></Upper>
        <Lower></Lower>
      </Spinner>
    </Main>
  );
};

export default Loader;
