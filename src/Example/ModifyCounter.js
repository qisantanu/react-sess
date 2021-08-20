import React from "react";
import "./styles.css";

class ModifyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  modifyCount = (incr) => {
    let count = this.state.count + parseInt(incr, 10);

    this.setState({
      count: count
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div>
          <button className="add" onClick={() => this.modifyCount("-1")}>
            subtract
          </button>
          <span className="my-number">{this.state.count}</span>
          <button className="add" onClick={() => this.modifyCount(1)}>
            add
          </button>
        </div>
      </div>
    );
  }
}

export default ModifyCounter;
