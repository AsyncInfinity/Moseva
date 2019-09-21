import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState("left");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          style={{
            border: "1px solid gray",
            paddingRight: 20,
            borderRadius: 5,
            borderColor: value == "left" ? "#3F51B5" : "white"
          }}
          value="left"
          control={<Radio color="primary" />}
          label="New Patient"
          labelPlacement="end"
        />
        <FormControlLabel
          style={{
            border: "1px solid gray",
            paddingRight: 20,
            borderRadius: 5,
            borderColor: value == "right" ? "#3F51B5" : "white"
          }}
          value="right"
          control={<Radio color="primary" />}
          label="Exiting Patient"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
