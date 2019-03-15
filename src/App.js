import React, { Component } from "react";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
  render() {
    const n = 26;
    return (
      <div className="App">
        <div className="image">
          <div className="cells">
            {[...Array(n)].map((e, i) => (
              <Cell />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
