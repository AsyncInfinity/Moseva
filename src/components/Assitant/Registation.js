import React from "react";
import TextField from "@material-ui/core/TextField";

import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { textAlign } from "@material-ui/system";
import { Link } from "react-router-dom";

const currencies = [
  {
    value: "male",
    label: "Male"
  },
  {
    value: "female",
    label: "Female"
  },
  {
    value: "other",
    label: "Other"
  }
];

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    name: "",
    dob: "",
    height: "",
    weight: "",
    address: "",
    contact: "",
    department: [],
    department2: "",
    department3: {},
    specialist3: {},
    specialist: [],
    specialist2: "",
    gender: "",
    email: "",
    w: true
  };
  componentDidMount() {
    axios
      .get("https://hardware-hackathon-medicine.herokuapp.com/department")
      .then(res => this.setState({ department: res.data }));
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "https://hardware-hackathon-medicine.herokuapp.com/patient/register",
        this.state
      )
      .then(res => alert(`${res.data.name} is added`))
      .then(() =>
        this.setState({
          name: "",
          dob: "",
          height: "",
          weight: "",
          address: "",
          contact: "",
          department: [],
          department2: "",
          department3: {},
          specialist3: {},
          specialist: [],
          specialist2: "",
          gender: "",
          email: ""
        })
      )
      .catch(err => console.log(err));
  }
  handleChange1 = name => event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChange2 = name => event => {
    this.setState({
      age: event.target.value
    });
  };
  handleChange6 = name => event => {
    this.setState({
      height: event.target.value
    });
  };
  handleChange5 = name => event => {
    this.setState({
      weight: event.target.value
    });
  };
  handleChange4 = name => event => {
    this.setState({
      address: event.target.value
    });
  };
  handleChange3 = name => event => {
    this.setState({
      contact: event.target.value
    });
  };
  handleChange7 = name => event => {
    this.setState({
      department2: event.target.value
    });
    console.log(event.target.value);
    this.setState({
      specialist: this.state.department.filter(
        spe => spe.name == event.target.value
      )[0].doctor
    });
  };
  handleChange8 = name => event => {
    console.log(event.target.value);
    this.setState({
      specialist2: event.target.value
    });
    console.log(event.target);
  };
  handleChange9 = name => event => {
    this.setState({
      gender: event.target.value
    });
  };
  handleChange10 = name => event => {
    this.setState({
      email: event.target.value
    });
  };
  handelWeight() {
    console.log("hel");
    axios
      .get("https://hardware-hackathon-medicine.herokuapp.com/patient/weight")
      .then(res =>
        this.setState({
          weight: Math.floor(res.data.weight * 100) / 100,
          w: false
        })
      );
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Paper style={{ width: "60%", margin: "0 auto", padding: "20px 10px" }}>
          <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
            Patient Registation Form
          </Typography>
          <form style={{ padding: "10px 50px" }} onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>
                {Date(Date.now())
                  .toString()
                  .substring(0, 24)}
              </legend>

              <div class="grid-container">
                <div id="item1" class="grid-item">
                  <TextField
                    id="standard-name"
                    label="Patient Name"
                    fullWidth
                    required
                    margin="normal"
                    onChange={this.handleChange1("name")}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <div id="item2" class="grid-item">
                    <TextField
                      id="standard-name"
                      type="number"
                      label="Age"
                      margin="normal"
                      variant="outlined"
                      required
                      onChange={this.handleChange2("name")}
                    />
                  </div>
                  <div id="item2" class="grid-item">
                    <TextField
                      id="standard-name"
                      variant="outlined"
                      select
                      fullWidth
                      label="Gender"
                      margin="normal"
                      value={this.state.gender}
                      onChange={this.handleChange9("gender")}
                      required
                      helperText="Select Your Gender"
                      margin="normal"
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
                <div id="item3" class="grid-item">
                  <TextField
                    id="standard-name"
                    label="Contact Number"
                    fullWidth
                    margin="normal"
                    type="number"
                    onChange={this.handleChange3("name")}
                  />
                </div>
                <div id="item3" class="grid-item">
                  <TextField
                    id="standard-name"
                    label="Email Id"
                    fullWidth
                    margin="normal"
                    type="email"
                    onChange={this.handleChange10("name")}
                  />
                </div>
                <div id="item4" class="grid-item">
                  <TextField
                    id="standard-name"
                    label="Address"
                    multiline
                    rows="3"
                    fullWidth
                    margin="normal"
                    required
                    onChange={this.handleChange4("name")}
                  />
                </div>
              </div>

              <div class="grid-container2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  {" "}
                  <div id="item11" class="grid-item">
                    <Button
                      onClick={() => this.handelWeight()}
                      variant="contained"
                      color="secondary"
                      style={{ margin: "20px" }}
                    >
                      Weight
                    </Button>
                    {this.state.w ? (
                      <TextField
                        id="outlined-name"
                        label="Weight"
                        margin="normal"
                        variant="outlined"
                        type="number"
                        helperText={`Last Updated ${new Date()
                          .toString()
                          .substring(4, 24)}`}
                        value={this.state.weight}
                        style={{ display: "inline-block" }}
                        onChange={this.handleChange5("address")}
                      />
                    ) : (
                      <TextField
                        id="outlined-name"
                        label="Weight"
                        margin="normal"
                        variant="outlined"
                        type="number"
                        helperText={`Last Updated ${new Date()
                          .toString()
                          .substring(4, 24)}`}
                        value={this.state.weight}
                        style={{ display: "inline-block" }}
                        onChange={this.handleChange5("address")}
                      />
                    )}
                  </div>
                  <div id="item12" class="grid-item">
                    <TextField
                      id="outlined-name"
                      label="Height"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      style={{ display: "inline-block" }}
                      onChange={this.handleChange6("contact")}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            {/* <fieldset>
                  <legend>Symptoms Analysis (optional)</legend>
                  <div id="item4" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Symptoms"
                      multiline
                      rows="3"
                      fullWidth
                      margin="normal"
                    />
                  </div>
                  <div class="grid-container">
                    <div id="item1" class="grid-item">
                      <TextField
                        id="standard-name"
                        label="Possible Disorder"
                        fullWidth
                        margin="normal"
                      />
                    </div>
                    <div id="item2" class="grid-item">
                      <TextField
                        id="standard-name"
                        label="Consultation Department"
                        fullWidth
                        margin="normal"
                      />
                    </div>
                    <div id="item3" class="grid-item">
                      <TextField
                        id="standard-name"
                        label="Specialists"
                        fullWidth
                        margin="normal"
                      />
                    </div>
                  </div>
                </fieldset> */}
            <div style={{ margin: "20px auto", width: "50%" }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
              >
                Register Patient
              </Button>
            </div>
            <div style={{ marginLeft: "auto", fontSize: "20px", width: "20%" }}>
              <Link to="/oldpatient">Register Old Patient</Link>
            </div>
          </form>
        </Paper>

        {/* <Grid container spacing={12}>
        <Grid item md={6}>
          <div id="main">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Patient Details</legend>

                <div class="grid-container">
                  <div id="item1" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Patient Name"
                      fullWidth
                      margin="normal"
                      onChange={this.handleChange1("name")}
                    />
                  </div>
                  <div id="item2" class="grid-item">
                    <TextField
                      id="standard-name"
                      defaultValue="1999-05-24"
                      type="date"
                      fullWidth
                      helperText="Date of Birth"
                      margin="normal"
                      onChange={this.handleChange2("name")}
                    />
                  </div>
                  <div id="item3" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Contact Number"
                      fullWidth
                      margin="normal"
                      type="number"
                      onChange={this.handleChange3("name")}
                    />
                  </div>
                  <div id="item4" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Address"
                      multiline
                      rows="3"
                      fullWidth
                      margin="normal"
                      onChange={this.handleChange4("name")}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Patient's Consultation Details</legend>
                <div class="grid-container2">
                  <div id="item11" class="grid-item">
                    <TextField
                      id="outlined-name"
                      label="Weight"
                      margin="normal"
                      variant="outlined"
                      type="number"
                      onChange={this.handleChange5("address")}
                    />
                  </div>
                  <div id="item12" class="grid-item">
                    <TextField
                      id="outlined-name"
                      label="Height"
                      margin="normal"
                      variant="outlined"
                      type="number"
                      onChange={this.handleChange6("contact")}
                    />
                  </div>
                  <div id="item13" class="grid-item">
                    <TextField
                      id="outlined-name"
                      label="Department"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange7("department")}
                    />
                  </div>
                  <div id="item14" class="grid-item">
                    <TextField
                      id="outlined-name"
                      label="Specialists"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange8("specialist")}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Symptoms Analysis (optional)</legend>
                <div id="item4" class="grid-item">
                  <TextField
                    id="standard-name"
                    label="Symptoms"
                    multiline
                    rows="3"
                    fullWidth
                    margin="normal"
                  />
                </div>
                <div class="grid-container">
                  <div id="item1" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Possible Disorder"
                      fullWidth
                      margin="normal"
                    />
                  </div>
                  <div id="item2" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Consultation Department"
                      fullWidth
                      margin="normal"
                    />
                  </div>
                  <div id="item3" class="grid-item">
                    <TextField
                      id="standard-name"
                      label="Specialists"
                      fullWidth
                      margin="normal"
                    />
                  </div>
                </div>
              </fieldset>
              <div style={{ margin: "10px auto", width: "40%" }}>
                <Button type="submit" variant="contained" color="secondary">
                  Register Patient
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item md={6} />
        </Grid> */}
      </div>
    );
  }
}

export default Register;
