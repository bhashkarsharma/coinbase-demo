// import FormContainer from "./js/components/container/FormContainer";
import ProductOverview from "./components/overview";
import ReactDOM from "react-dom";
import React from "react";

const wrapper = document.getElementById("app-root");
wrapper ? ReactDOM.render(<ProductOverview />, wrapper) : false;