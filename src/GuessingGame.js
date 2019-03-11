import React, { Component } from "react";
import colorArray from "./Colors";
import "./GuessingGame.css";

let tries = 0;
class GuessingGame extends Component {
  state = {
    randomColor: colorArray[Math.floor(Math.random() * colorArray.length)],
    msg: "",
    displayTriese: "",
    max_guessed: 3,
    won: false,
    lose: false
  };
  coloredBox = () => {
    return colorArray.map((color, index) => {
      return (
        <button
          key={index}
          disabled={this.state.lose}
          className="btn square"
          style={{ backgroundColor: this.state[color] ? "#363636" : color }}
          onClick={() => {
            {
              let check = this.checkAll(color);

              console.log("CHECK", check);
              if (check) {
                this.setState({ [color]: true });
              }
            }
          }}
        />
      );
    });
  };
  randomColor = () => {
    const colors = colorArray;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(this.state.randomColor);
  };

  compareColor = color => {
    const { randomColor } = this.state;
    if (randomColor === color) {
      this.setState({ msg: "YOU WIN!!", lose: true });
      tries = tries + 1;
    } else if (randomColor !== color) {
      tries = tries + 1;

      this.setState({
        msg: "WRONG! Try Again .. ",
        displayTriese: `${tries} / 3`
      });

      return true;
    }
  };

  // handleChange = event => {
  //   this.setState({ number: event.target.value });
  // };

  checkAll = color => {
    const { max_guessed } = this.state;

    if (tries === max_guessed) {
      this.setState({ lose: true });
    } else {
      return this.compareColor(color);
    }
  };

  render() {
    return (
      <div className="center-it m-auto ">
        <h1>Pick A Color!</h1>

        <br />
        <h3>{this.state.msg}</h3>
        <h5>{this.state.displayTriese}</h5>
        {this.randomColor()}
        {this.coloredBox()}

        <div className="form-group form ">
          <br />
          <a href="/">
            <button className="btn btn-danger p-6  ">Reset</button>
          </a>
        </div>
      </div>
    );
  }
}

export default GuessingGame;
