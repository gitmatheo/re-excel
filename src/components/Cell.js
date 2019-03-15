import React, { Component } from "react";

class Cell extends Component {
  state = {
    text: ` `,
    textToShow: "To jest przykładowy text do wpisania w komórkę",
    counter: 0
  };

  handleChange = e => {
    const { text, textToShow, counter } = this.state;
    this.setState({
      text: text.concat(textToShow.slice(counter, counter + 1)),
      counter: counter + 1
    });
  };

  render() {
    const n = 220;
    return (
      <input
        className="cells__input"
        type="text"
        onChange={this.handleChange}
        value={this.state.text}
      />
    );
  }
}

export default Cell;
