import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faImage, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// library.add(faImage, faPlusSquare);

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;