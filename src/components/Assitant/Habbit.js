import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "male",
    material_status: "married"
  });

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <fieldset style={{ borderRadius: 5 }}>
        <legend>Habbit:</legend>
        <TextField
          id="outlined-multiline-static"
          label="General Instruction or Message"
          multiline
          fullWidth
          rows="4"
          placeholder="General Instruction or Message"
          className={classes.textField}
          margin="normal"
        />
      </fieldset>
    </form>
  );
}
