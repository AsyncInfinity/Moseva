import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "0px 20px 5px 20px "
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
    mobile: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        style={{ width: "45%" }}
        id="standard-name1"
        label="Address Line 1"
        className={classes.textField}
        value={values.address1}
        onChange={handleChange("address1")}
        margin="normal"
      />
      <TextField
        style={{ width: "45%" }}
        id="standard-name2"
        label="Address Line 2"
        className={classes.textField}
        value={values.address2}
        onChange={handleChange("address2")}
        margin="normal"
      />
      <TextField
        style={{ width: "30%" }}
        id="standard-name3"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange("address3")}
        margin="normal"
        type="email"
      />
      <TextField
        style={{ width: "20%" }}
        id="outlined-name"
        label="Mobile No"
        className={classes.textField}
        value={values.mobile}
        onChange={handleChange("mobile")}
        margin="normal"
        type="number"
      />
      <TextField
        style={{ width: "20%" }}
        id="outlined-name"
        label="City"
        className={classes.textField}
        value={values.city}
        onChange={handleChange("city")}
        margin="normal"
      />

      <TextField
        style={{ width: "20%" }}
        id="outlined-name"
        label="Zipcode"
        type="number"
        className={classes.textField}
        value={values.zip}
        onChange={handleChange("zip")}
        margin="normal"
      />
    </form>
  );
}
