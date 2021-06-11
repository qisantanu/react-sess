import React, { Component } from "react";
import "./styles.css";
//import {render } from 'react-dom';

class Counter extends React.component {
  modifyCount = (e) => {};

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div>
          <button class="add">subtract</button>
          <span class="my-number">0</span>
          <button class="add" onChange={this.modifyCount}>
            add
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
