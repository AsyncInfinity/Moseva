import React from "react";

import { Grid, Button, TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import PatientProfile from "./patientProfile";

import Mic from "./Mic";
import FreeHandWriting from "./FreeHandWriting";

import ReactToPrint from "react-to-print";
import Prescription from "./Prescription";

import { connect } from "react-redux";
import {
  getDepartment,
  getPatientOne,
  registerPatientData
} from "../../actions/doctorAction";

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      drawer: true,
      recordShow: true,
      show: false,
      prescription: "",
      audioUrl: "",
      department: [],
      department2: "",
      department3: "",
      isSubmit: false
    };
  }

  handelPaint = paint => {
    this.setState({ prescription: paint });
  };
  handelAudio = url => {
    this.setState({ audioUrl: url });
  };

  MenuIconHandeler = () => {
    this.setState({ drawer: !this.state.drawer ? true : false });
  };
  handelSubmit() {
    this.props.registerPatientData(this.props.match.params.id, {
      department: this.state.department3,
      freeHand: this.state.prescription
    });

    this.setState({ isSubmit: true });
  }

  componentDidMount() {
    this.props.getPatientOne(this.props.match.params.id);
    this.props.getDepartment();
  }
  handleChange7 = name => event => {
   
    this.setState({
      department2: event.target.value,
      department3: { id: event.target.value._id, name: event.target.value.name }
    });
  };

  render() {
  
    if (this.props.hospital) {
      if (this.props.hospital.patientOne) {
        return (
          <div>
            <Grid container spacing={10}>
              <Grid
                style={{ paddingTop: "70px", paddingLeft: "50px" }}
                className="close"
                item
                md={3}
              >
                <div style={{ marginBottom: "30px" }} />
                <PatientProfile profile={this.props.hospital.patientOne} />
                <form>
                  <TextField
                    style={{ width: "300px" }}
                    id="outlined-name"
                    label="Select Disease"
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    value={this.state.department2}
                    onChange={this.handleChange7("department")}
                    select
                  >
                    {this.props.hospital.departmentList
                      ? this.props.hospital.departmentList.map(option => (
                          <MenuItem key={option._id} id="yes" value={option}>
                            {option.name}
                          </MenuItem>
                        ))
                      : ""}
                  </TextField>
                </form>
                <Mic
                  onAudioChange={this.handelAudio}
                  patient={this.props.hospital.patientOne}
                />

                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => this.handelSubmit()}
                    style={{ width: "300px", margin: "50px auto" }}
                  >
                    {this.state.isSubmit ? (
                      <ReactToPrint
                        trigger={() => (
                          <a
                            style={{
                              padding: "10px 20px",
                              textDecoration: "none",
                              color: "white",
                              background: "#1A9FFF"
                            }}
                            href="#"
                          >
                            Print this out!
                          </a>
                        )}
                        content={() => this.componentRef}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </Grid>
              <Grid style={{ marginTop: "10px" }} className="close" item md={9}>
                <FreeHandWriting onHandelPaint={this.handelPaint} />
              </Grid>
            </Grid>

            <Prescription
              drawing={this.state.prescription}
              disease={this.state.department2}
              qr={this.state.audioUrl}
              profile={this.props.hospital.patientOne}
              ref={el => (this.componentRef = el)}
            />
          </div>
        );
      } else {
        return <div>hello</div>;
      }
    }
  }
}
const mapStateToProps = state => ({
  hospital: state.patients
});

export default connect(
  mapStateToProps,
  { getDepartment, getPatientOne, registerPatientData }
)(Doctor);
