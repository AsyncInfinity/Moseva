import React from "react";

import CanvasDraw from "react-canvas-draw";

import Paper from "@material-ui/core/Paper";

import { Button, TextField } from "@material-ui/core";



import "./FreeHandWritting.css";

class Demo extends React.Component {
  state = {
    color: "black",
    width: 1300,
    height: 850,
    brushRadius: 1,
    lazyRadius: 1,
    paint: ""
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>
          <CanvasDraw
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={this.state.width}
            canvasHeight={this.state.height}
          />
        </Paper>

        <div className="close" item md={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              margin: "20px auto",
              textAlign: "center"
            }}
          >
            <Button
              onClick={() => {
                this.saveableCanvas.clear();
              }}
              variant="contained"
              color="primary"
              style={{ margin: 10 }}
            >
              Clear
            </Button>
            <Button
              onClick={() => {
                this.saveableCanvas.undo();
              }}
              variant="contained"
              color="primary"
              style={{ margin: 10 }}
            >
              Undo
            </Button>

            <Button
              onClick={() => {
                this.props.onHandelPaint(this.saveableCanvas.getSaveData());
                this.setState({ paint: this.saveableCanvas.getSaveData() });
                localStorage.setItem(
                  "savedDrawing",
                  this.saveableCanvas.getSaveData()
                );
              }}
              variant="contained"
              color="secondary"
              style={{ margin: 10 }}
            >
              Save
            </Button>
            <br />
            <br />
            <div>
              <label>Brush-Radius:</label>
              <TextField
                className="textField"
                type="number"
                value={this.state.brushRadius}
                onChange={e =>
                  this.setState({
                    brushRadius: parseInt(e.target.value, 10)
                  })
                }
                variant="outlined"
                style={{ width: "100px" }}
              />
            </div>
            <br />
            <div>
              <label>Lazy-Radius:</label>
              <TextField
                className="textField"
                type="number"
                value={this.state.lazyRadius}
                onChange={e =>
                  this.setState({
                    lazyRadius: parseInt(e.target.value, 10)
                  })
                }
                variant="outlined"
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
