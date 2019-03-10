import React, { Component } from "react";
let tries = 0;

class GuessingGame extends Component {
  state = {
    number: null,
    random: Math.floor(Math.random() * 100),
    msg: "",
    max_guessed: 4,

    wisdom: false
  };

  handleChange = event => {
    this.setState({ number: event.target.value });
  };

  checkAll = () => {
    const { max_guessed } = this.state;

    if (tries >= max_guessed) {
      return this.setState({ msg: "GameOver" });
    } else {
      this.checkNumber();
    }
  };

  checkNumber = () => {
    const { random, number } = this.state;
    if (number == random) {
      return this.setState({ msg: "you won!!" });
    } else if (number > random) {
      tries = tries + 1;
      console.log(tries);
      return this.setState({ msg: "Way too high" });
    } else if (number < random) {
      tries = tries + 1;
      console.log(tries);
      return this.setState({ msg: "way to LOW" });
    }
  };

  reset = () => {
    this.setState({ random: Math.floor(Math.random() * 100) });
    tries = 0;
    this.setState({ msg: "" });
  };

  hint = () => {
    this.setState({ wisdom: true });
  };

  display = () => {
    if (this.state.wisdom) {
      const m = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 100)
      );
      console.log(m);
      return m.map(num => {
        return <h1>{num}</h1>;
      });
    }
  };

  render() {
    console.log(this.state.random);

    const wisdom = this.state.wisdom;

    return (
      <div>
        <h1>Guessing Game</h1>
        <h3>{this.state.msg}</h3>

        <input type="number" onChange={this.handleChange} />
        <button onClick={this.checkAll}>BANISH</button>
        <button onClick={this.reset}>Surrender</button>
        <button onClick={this.hint}>Wisdom</button>
        {this.display()}
      </div>
    );
  }
}

export default GuessingGame;
