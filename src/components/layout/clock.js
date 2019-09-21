import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export default class clock extends Component {
  constructor(props) {
    super(props);
    const time = new Date();
    this.state = {
      hours: this.round(time.getHours()),
      mins: this.round(time.getMinutes()),
      secs: this.round(time.getSeconds())
    };
  }
  componentDidMount() {
    setInterval(this.timer.bind(this), 1000);
  }
  timer() {
    const time = new Date();
    this.setState({
      hours: this.round(time.getHours()),
      mins: this.round(time.getMinutes()),
      secs: this.round(time.getSeconds())
    });
  }
  round(num) {
    if (num <= 9) {
      return `0${num}`;
    }
    return `${num}`;
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ marginLeft: "auto" }}>
        <Typography variant="h6" color="inherit">
          {new Date().toDateString()}{" "}
          <code style={{ margin: "0 20px" }}>
            {this.state.hours}:{this.state.mins}:{this.state.secs}
          </code>
        </Typography>
      </div>
    );
  }
}
