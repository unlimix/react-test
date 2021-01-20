import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Cont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.add = this.add.bind(this);
    this.rem = this.rem.bind(this);
  }

  add() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  rem() {
    if (this.state.count == 0) {
      return;
    }
    this.setState((state) => ({
      count: state.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h5>{this.state.count}</h5>
        <Button onClick={this.add} variant="primary">
          ++1
        </Button>
        <Button onClick={this.rem} variant="primary">
          --1
        </Button>
      </div>
    );
  }
}
