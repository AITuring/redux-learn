import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css';
// import Markdown from "./Markdown";
import ReduxLearn from "./pages/reduxLearn";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxLearn />
  </StrictMode>,
  rootElement
);