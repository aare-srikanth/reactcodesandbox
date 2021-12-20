import { StrictMode } from "react";
import ReactDOM from "react-dom";
import DataCom from "./Dcomp";
//import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataCom />
  </StrictMode>,
  rootElement
);
