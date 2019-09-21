import React from "react";
import "./Prescription.css";
import CanvasDraw from "react-canvas-draw";

var QRCode = require("qrcode.react");

class Prescription extends React.Component {
  render(props) {
   
    if (this.props.drawing) {
      return (
        <div id="container">
          <div id="d1">
            <h1>SIH HOSPITAL</h1>
            <div id="doc_detail">
              <p>
                <strong>Dr. Prashant Dash</strong> M.B.B.S,M.S(Ortho)
              </p>
              <p>Bidyanagar, Mahura, Janla, Khordha</p>
              <p>Odisha-752054</p>
            </div>
            <div id="hospital_detail">
              <strong> Disease </strong>
              <p>{this.props ? this.props.disease.name : ""}</p>
            </div>
          </div>
          <div id="border" />
          <div id="d2">
            <div>
              <div id="d21">
                <label for="name">Patient Name:</label>
                <input
                  type="text"
                  value={this.props.profile ? this.props.profile.name : ""}
                />
              </div>
              <div id="d21">
                <label for="age">Age:</label>
                <input
                  type="text"
                  value={this.props.profile ? this.props.profile.age : ""}
                />
              </div>
              <div id="d21">
                <label for="gender">Gender:</label>
                <input
                  type="text"
                  value={this.props.profile ? this.props.profile.gender : ""}
                />
              </div>
            </div>
            <div>
              <div id="d22">
                <label for="name">Address:</label>
                <input
                  type="text"
                  value={this.props.profile ? this.props.profile.address : ""}
                />
              </div>
              <div id="d22">
                <label for="age">Weight:</label>
                <input
                  type="text"
                  value={this.props.profile ? this.props.profile.weight : ""}
                />
              </div>
              <div id="d22">
                <label for="age">Date:</label>
                <input
                  type="text"
                  value={
                    this.props.profile
                      ? this.props.profile.date.substring(0, 10)
                      : ""
                  }
                />
              </div>
            </div>
          </div>
          <div id="d3">
            <CanvasDraw
              disabled
              hideGrid
              ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
              saveData={this.props.drawing}
            />
          </div>
          <div id="border" />
          <div id="d4">
            <div id="qrcode">
              <QRCode
                style={{
                  width: "80px",
                  height: "80px",
                  paddingLeft: "2em",
                  paddingTop: "0.5em"
                }}
                value={
                  this.props.profile
                    ? `https://hardware-hackathon-medicine.herokuapp.com/patient/${
                        this.props.profile._id
                      }`
                    : ""
                }
              />
            </div>
            <div id="doc_sign">
              <h3>Doctor Signature:</h3>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div style={{ textAlign: "center" }}>
        Your Prescription Will Load here
      </div>
    );
  }
}

export default Prescription;
