import React from "react";

import "./Mic.css";
import { Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";

import { ReactMic } from "react-mic";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      url: ""
    };
    this.onStop = this.onStop.bind(this);
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log(recordedBlob);
    let formdata = new FormData(); //create a from to of data to upload to the server

    formdata.append(
      "upl",
      recordedBlob.blob,
      `${this.props.patient._id}_${Math.round(
        new Date().getTime()
      )}_${this.props.patient.name.trim()}.mp3`
    );
    axios.post(
      `http://localhost:3000/patient/audio/${this.props.patient._id}`,
      formdata
    );
  }

  render() {
    

    return (
      <Paper
        style={{
          padding: "5px 10px",
          margin: "25px 0px 0px 0px",
          width: "300px"
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            textDecoration: "underline",
            margin: "10px 5px",
            width: "300px"
          }}
          variant="h6"
          component="h2"
        >
          Record Voice
        </Typography>
        {this.state.url ? (
          <audio controls="true" src={this.state.url} />
        ) : (
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#000000"
            backgroundColor="#FF4081"
            mimeType="audio/mp3"
          />
        )}

        <br />
        <div style={{ margin: "10px auto", width: "50%" }}>
          {this.state.url ? (
            <a
              style={{ textDecoration: "none" }}
              href={this.state.url}
              download={
                this.props
                  ? `${this.props.patient._id}_${Math.round(
                      new Date().getTime() / 86400000
                    )}_${this.props.patient.name}`
                  : ""
              }
            >
              <Button
                style={{ marginLeft: "auto" }}
                color="primary"
                variant="outlined"
                type="button"
                fullWidth
              >
                Download
              </Button>{" "}
            </a>
          ) : !this.state.record ? (
            <Button
              color="primary"
              variant="outlined"
              onClick={this.startRecording}
              type="button"
              fullWidth
            >
              Start
            </Button>
          ) : (
            // ={`${this.state.patientDetails?this.state.patientDetails.name:''}${this.state.patientDetails?this.state.patientDetails.date.substring(0,10):''}audio`}

            <Button
              style={{ marginLeft: "auto" }}
              color="secondary"
              variant="outlined"
              onClick={this.stopRecording}
              type="button"
              fullWidth
            >
              Stop
            </Button>
          )}
        </div>
      </Paper>
    );
  }
}

export default Example;
