import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DatePicker from "./datePicker";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import "./form.css";
import axios from "axios";

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
const material_status = [
  {
    value: "married",
    label: "Married"
  },
  {
    value: "unmarried",
    label: "Unmarried"
  }
];
const blood_group = [
  {
    value: "b+ve",
    label: "B +ve"
  },
  {
    value: "a+ve",
    label: "A +ve"
  },

  {
    value: "o+ve",
    label: "O +ve"
  },
  {
    value: "ab+ve",
    label: "AB +ve"
  },

  {
    value: "o-ve",
    label: "O -ve"
  },

  {
    value: "b-ve",
    label: "B -ve"
  }
];

const relationship = [
  { value: "husband", label: "Husband" },
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "brother", label: "Brother" },
  { value: "local_gardian", label: "Local Gardian" }
];

const useStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  textField: {
    marginLeft: 5,
    marginRight: 5
  },
  dense: {
    marginTop: 5
  },
  menu: {
    width: 200
  }
};

export default class OutlinedTextFields extends React.Component {
  state = {
    fname: "",
    mname: "",
    lname: "",
    pname: "",
    height: "",
    weight: "",
    address1: "",
    address2: "",
    mobile: "",
    email: "",
    dateofBirth: "",
    zip: ""
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChange2 = name => {
    this.setState({ dateofBirth: name });
  };

  render() {
    console.log(this.state);
    return (
      <form
        onSubmit={() => this.FormSubmit()}
        style={useStyles.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="First Name"
          style={useStyles.textField}
          value={this.state.fname}
          onChange={this.handleChange("fname")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Middle Name"
          style={useStyles.textField}
          value={this.state.mname}
          onChange={this.handleChange("mname")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Last Name"
          style={useStyles.textField}
          value={this.state.lname}
          onChange={this.handleChange("lname")}
          margin="normal"
          variant="outlined"
        />
        <span style={{ padding: "5px 20px ", width: 210 }}>
          <DatePicker changeDate={this.handleChange2.bind(this)} />
        </span>
        <TextField
          style={{ width: 190 }}
          id="outlined-select-currency"
          select
          label="Gender"
          style={useStyles.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            MenuProps: {
              style: useStyles.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ width: 210 }}
          id="outlined-select-currency"
          select
          label="Maritial Status"
          style={useStyles.textField}
          value={this.state.material_status}
          onChange={this.handleChange("material_status")}
          SelectProps={{
            MenuProps: {
              style: useStyles.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {material_status.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ width: 150 }}
          id="outlined-select-currency"
          select
          label="Blood Group"
          style={useStyles.textField}
          value={this.state.blood_group}
          onChange={this.handleChange("blood_group")}
          SelectProps={{
            MenuProps: {
              style: useStyles.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {blood_group.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ width: "150px" }}
          id="outlined-name"
          label="Height in Feet"
          style={useStyles.textField}
          value={this.state.height}
          onChange={this.handleChange("height")}
          margin="normal"
          variant="outlined"
        />
        <span>
          <TextField
            style={{ width: "150px" }}
            id="outlined-name"
            label="Weight in K.G"
            style={useStyles.textField}
            value={this.state.weight}
            onChange={this.handleChange("weight")}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            style={{ margin: 19, width: 150, fontSize: 11 }}
            color="primary"
          >
            Fetch Height and Weight
          </Button>
        </span>
        <TextField
          id="outlined-full-width"
          placeholder="Enter Full Name"
          style={{ width: "63%", margin: "15px 10px" }}
          label="Parent or Guadian Name"
          margin="normal"
          variant="outlined"
          value={this.state.pname}
          onChange={this.handleChange("pname")}
        />
        <TextField
          style={{ width: "28%" }}
          id="outlined-select-currency"
          select
          label="Relationship"
          style={useStyles.textField}
          value={this.state.relationship}
          onChange={this.handleChange("relationship")}
          SelectProps={{
            MenuProps: {
              style: useStyles.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {relationship.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <TextField
            style={{ width: "45%" }}
            id="standard-name1"
            label="Address Line 1"
            className={useStyles.textField}
            value={this.state.address1}
            onChange={this.handleChange("address1")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            style={{ width: "45%" }}
            id="standard-name2"
            label="Address Line 2"
            className={useStyles.textField}
            value={this.state.address2}
            onChange={this.handleChange("address2")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            style={{ width: "30%" }}
            id="standard-name3"
            label="Email"
            className={useStyles.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
            type="email"
            variant="outlined"
          />
          <TextField
            style={{ width: "20%" }}
            id="outlined-name"
            label="Mobile No"
            className={useStyles.textField}
            value={this.state.mobile}
            onChange={this.handleChange("mobile")}
            margin="normal"
            type="number"
            variant="outlined"
          />
          <TextField
            style={{ width: "20%" }}
            id="outlined-name"
            label="City"
            className={useStyles.textField}
            value={this.state.city}
            onChange={this.handleChange("city")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            style={{ width: "20%" }}
            id="outlined-name"
            label="Zipcode"
            type="number"
            className={useStyles.textField}
            value={this.state.zip}
            onChange={this.handleChange("zip")}
            margin="normal"
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}
