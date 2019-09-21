import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import React from "react";
const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    textAlign: "left"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
 
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          style={{
            textAlign: "center",
            textDecoration: "underline",
            margin: "5px"
          }}
          variant="h6"
          component="h2"
        >
          Patient Details
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Patient Number {props.profile ? props.profile.PatientNumber : ""}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.profile ? props.profile.name : "Name"}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.profile ? props.profile.gender : ""} |{" "}
          {props.profile ? props.profile.height : "20"}ft |{" "}
          {props.profile ? props.profile.weight : "20"}kg
        </Typography>

        {/* <Typography variant="body2" component="p">
          <strong>Blood Sugar</strong> :100 mg/dL
          <br /> <strong>Blood Pressure</strong>:130/80
          <br />
          <strong> Pulse Rate</strong>:60 bpm
        </Typography> */}
      </CardContent>
    </Card>
  );
}
