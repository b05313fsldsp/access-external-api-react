import React, { useEffect, useState } from "react";
import styled from "styled-components";
//a.
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

     // your required states here
      
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value})
    console.log('Your zip code is' + this.state.zipcode)
  }

  handleSubmit(event) {

    let base = this

    // your fetch here
    // your state updates go under function(json)

  }

  render() {
    return (
      <div>
       
      <form onSubmit={this.handleSubmit}>
        <p>
          
      // display weather information here
      
        </p>
        <label>
          Please enter your zip code for the weather:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get my forecast!" />
      </form>
      </div>
    )
  }
}

export default App;