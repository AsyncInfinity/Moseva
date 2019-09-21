import React from "react";
import axios from "axios";
import { List } from "@material-ui/core/";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Accessible";
import MailIcon from "@material-ui/icons/AccessibleForward";
import { Link } from "react-router-dom";
import { getPatient } from "../../actions/assistantAction";
import { connect } from "react-redux";

class PatientList extends React.Component {
  state = {
    patient: []
  };
  componentDidMount() {
    axios
      .get(
        "https://hardware-hackathon-medicine.herokuapp.com/patient/patient/today"
      )
      .then(res => this.setState({ patient: res.data }));
  }
  render() {
    return (
      <div>
        <List>
          {this.state.patient.map((text, index) => (
            <Link
              to={`patient/${text._id}`}
              key={text._id}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                style={{
                  textAlign: "left",
                  margin: "5px 10px",
                  width: "90%",

                  borderRadius: "5px"
                }}
                button
                key={text._id}
              >
                <ListItemIcon>
                  {text.isCurrent ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  style={{ textShadow: "1px 1px 1px 1px" }}
                  primary={text.name}
                  secondary={`Patient No-${text.PatientNumber}`}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients
});

export default connect(
  mapStateToProps,
  { getPatient }
)(PatientList);
