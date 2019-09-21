import React from "react";

import Chart from "react-google-charts";
import axios from "axios";

import Tables from "./Table";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Spinner from '../utils/spinner'

const loginAs = [
  { key: "doctor", value: "Doctor" },
  { key: "assistant", value: "Assitant" },
  { key: "medicineStore", value: "Medicine Store" }
];

class App extends React.Component {
  state = {
    data: ["Number of Patient", "Departments", { role: "style" }],
    graph: [],
    loginas: ""
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      loginas: event.target.value
    });
  }
  componentDidMount() {
    const arr = [];
    axios
      .get("https://hardware-hackathon-medicine.herokuapp.com/patient/a")
      .then(res => this.setState({ data: [this.state.data, ...res.data] }));

    axios
      .get("https://hardware-hackathon-medicine.herokuapp.com/patient")
      .then(res =>
        this.setState({
          graph: res.data.filter(r => r.department),
          length: res.data.filter(r => r.department).length
        })
      );
  }
  render() {
    const Neurology = this.state.graph.filter(
      res => res.department.id === "5d20f85f7374820ff49cdd82"
    ).length;
    const Dermatology = this.state.graph.filter(
      res => res.department.id === "5d20f85f7374820ff49cdd8a"
    ).length;
    const Gynecology = this.state.graph.filter(
      res => res.department.id === "5d20f85f7374820ff49cdd94"
    ).length;
    const Ophthalmology = this.state.graph.filter(
      res => res.department.id === "5d20f85f7374820ff49cdd9d"
    ).length;
    const Cardiology = this.state.graph.filter(
      res => res.department.id === "5d20f85f7374820ff49cdda6"
    ).length;

    if (this.state.data && this.state.length) {
      return (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <h1 style={{ textAlign: "center" }}>Statistics Page</h1>
          <div style={{ margin: "0 auto", width: "300px" }}>
            <FormControl style={{ width: "300px" }} required variant="filled">
              <InputLabel htmlFor="loginas-helper">Sign In As</InputLabel>
              <Select
                value={this.state.loginas}
                onChange={event => this.handleChange(event)}
                inputProps={{
                  name: "loginas",
                  id: "loginas-helper"
                }}
              >
                {loginAs.map(tem => (
                  <MenuItem key={tem.key} value={tem.key}>
                    {tem.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <h1>Hospital Details</h1>
            <div
              style={{
                width: "300px",
                height: "4px",
                backgroundColor: "#2196f3"
              }}
            />
            <Tables
              total={this.state.length}
              Neurology={Neurology}
              Ophthalmology={Ophthalmology}
              Gynecology={Gynecology}
              Cardiology={Cardiology}
              Dermatology={Dermatology}
            />
          </div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <h1 style={{}}>Daily Statistics</h1>
            <div
              style={{
                width: "300px",
                height: "4px",
                backgroundColor: "#2196f3"
              }}
            />
          </div>

          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={this.state.data}
          />
        </div>
      );
    } else {
      return <div><Spinner /></div>;
    }
  }
}

export default App;
