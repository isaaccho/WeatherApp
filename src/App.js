import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "2d030085d740f1d58d6cfd0329851bc5";

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch(
      "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric"
    );
  };

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
