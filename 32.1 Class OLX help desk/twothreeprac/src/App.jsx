import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import Home from "./conatiners/Home";
import AppRouter from "./config/routers";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    )
  }
}

export default App;
