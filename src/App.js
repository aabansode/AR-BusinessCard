import React, { Component } from 'react';
import { Row, Form, Button } from "react-bootstrap";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var object = {};
    data.forEach(function(value, key){
      object[key] = value;
    });

    axios.post('http://localhost:5000/register-item', object)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="price">Enter Price</label>
        <input id="price" name="price" type="number" />

        <label htmlFor="quantity">Enter Quantity</label>
        <input id="quantity" name="quantity" type="number" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default App;
