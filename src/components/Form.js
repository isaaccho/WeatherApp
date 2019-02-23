import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Find out the weather!</button>
  </form>
);
//this onSubmit will activate the getWeather function when the button is pressed
export default Form;
