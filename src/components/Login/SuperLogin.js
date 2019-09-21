import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";


import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";


import { Link } from "react-router-dom";
import "./login.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://altrasyscon.com/">
        ayushInfinity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = {
  root: {
    height: "100vh"
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: 20,
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 5,
    backgroundColor: "#E63939"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 5
  },
  submit: {
    marginTop: 10
  },
  submit2: {
    marginTop: 10,
    cursor: "not-allowed"
  },
  formControl: {
    marginTop: 5,
    width: "100%"
  },
  selectEmpty: {
    marginTop: 5
  }
};



export default class SignInSide extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    password: "",
    username: "",
    hospital: "",
    loginas: "doctor"
  };

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const Login = () => {
      if (
        this.state.username === "123@super.com" &&
        this.state.password === "12345"
      ) {
        return (
          <Link to='/dashboard' style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              style={useStyles.submit}
            >
              Login
            </Button>
          </Link>
        );
      } else {
        return (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={useStyles.submit2}
          >
            Login
          </Button>
        );
      }
    };
    return (
      <Grid container component="main" style={useStyles.root}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          id="login_page_background"
          style={useStyles.image}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          component={Paper}
          elevation={6}
          square
        >
          <div style={useStyles.paper}>
            <Avatar style={useStyles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Super User Sign in
            </Typography>
            <form
              autoComplete="off"
              style={useStyles.form}
              onSubmit={e => e.preventDefault()}
              noValidate
            >
              {/* <FormControl
                required
                variant="filled"
                style={useStyles.formControl}
              >
                <InputLabel htmlFor="hospital-helper">
                  Chooose Hospital
                </InputLabel>
                <Select
                  value={this.state.hospital}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "hospital",
                    id: "hospital-helper"
                  }}
                >
                  {hospital.map(tem => (
                    <MenuItem key={tem.key} value={tem.key}>
                      {tem.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <TextField
                variant="outlined"
                margin="normal"
                onChange={this.handleChange}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
              />

              {Login()}
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
