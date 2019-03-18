import React, { Component } from "react";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
  render() {
    // const n = 26;
    return (
      <div className="App">
        <div className="image">
          <div className="cells">
            {/* {[...Array(n)].map((e, i) => (
              <Cell />
            ))} */}
            {/* Wiersz1 */}
            <Cell text="mieszkanie" />
            <Cell text="Różana 32/5" />
            <Cell text="wynajem" />
            <Cell text="48" />
            <Cell text="Mokotów" />
            <Cell text="10 765 zł/m2" />
            <Cell text="2 500 zł" />
            <Cell text="wtórny" />
            <Cell text="2" />
            <Cell text="1996" />
            <Cell text="drugie" />
            <Cell text="tak" />
            <Cell text="37" />
            {/* Wiersz2 */}
            <Cell text="dom" />
            <Cell text="Dembińskiego 12" />
            <Cell text="sprzedaż" />
            <Cell text="250" />
            <Cell text="Żoliborz" />
            <Cell text="19 265 zł/m2" />
            <Cell text="4 380 000 zł" />
            <Cell text="pierwotny" />
            <Cell text="4" />
            <Cell text="2010" />
            <Cell text="dwupiętrowy" />
            <Cell text="nie" />
            <Cell text="198" />
            {/* Wiersz3 */}
            <Cell text="willa" />
            <Cell text="Dąbrowskiego 72" />
            <Cell text="sprzedaż" />
            <Cell text="420" />
            <Cell text="Mokotów" />
            <Cell text="19 709 zł/m2" />
            <Cell text="9 380 000 zł" />
            <Cell text="pierwotny" />
            <Cell text="7" />
            <Cell text="2006" />
            <Cell text="parterowa" />
            <Cell text="nie" />
            <Cell text="127" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
