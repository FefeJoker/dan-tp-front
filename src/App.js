import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login/Login"

function App() {
  return (
    <div className="App">
      <div className={"center-app"}>
        <Login />
      </div>
    </div>
  );
}

export default App;
