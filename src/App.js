import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
