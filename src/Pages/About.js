import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 1000,
      count: 0,
      curs: 1
    };

    this.add = this.add.bind(this);
    this.rem = this.rem.bind(this);
    this.cfgd = this.cfgd.bind(this);
    this.cfddfdfdf = this.cfddfdfdf.bind(this);
    this.cfgd();
    console.log("kyi");
  }

  add() {
    this.setState((state) => ({
      count: state.count + 1,
      money: state.money - state.curs
    }));
  }

  rem() {
    if (this.state.count === 0) {
      return;
    }
    this.setState((state) => ({
      count: state.count - 1,
      money: state.money + state.curs
    }));
  }

  cfgd() {
    //setInterval(this.cfddfdfdf, 2000);
    //clearInterval(myVar);
  }

  cfddfdfdf() {
    let index = this.getRandomInt(10) - this.getRandomInt(10);
    console.log(index);
    this.setState((state) => ({
      curs: state.curs + index
    }));
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div>
        <h1>{this.state.money}</h1>
        <h2>{this.state.curs} = 1</h2>
        <h5>{this.state.count}</h5>
        <Button onClick={this.add} variant="primary">
          ++1
        </Button>
        <Button onClick={this.rem} variant="primary">
          --1
        </Button>
        <div class="wrapper">
          <div className="box box1">One</div>
          <div className="box box2">Two</div>
          <div className="box box3">Three</div>
          <div className="box box4">Four</div>
          <div className="box box5">Five</div>
        </div>
      </div>
    );
  }
}
