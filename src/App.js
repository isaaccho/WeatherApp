import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "2d030085d740f1d58d6cfd0329851bc5";

class App extends Component {
  getWeather = async e => {
    e.preventDefault(); //This wil prevent the default behaviour that will happen when the button is pressed
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json(); //this will convert the api data into a code that is readable for languages using json
    console.log(data);
  };

  render() {
    return (
      <div>
        <Header />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
