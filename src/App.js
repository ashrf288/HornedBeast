import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "../src/components/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SelectedBeast from "./components/SelectedBeast";
class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      a: false,
      desc: "",
      beast: {},
    };
  }
  selectedName = (selection, descrip) => {
    let state = this.state;
    let bests = data.filter((beast) => {
      return beast.title === selection;
    });
    state.theSelected = selection;
    state.desc = descrip;
    state.beast = bests[0];
    this.setState(state);
    this.setState({ a: true });
    console.log(this.state.theSelected);
  };
  handleA = () => {
    this.setState({ a: false });
  };

  render() {
    return (
      <div>
        <Header />
        <Main data={data} select={this.selectedName} />
        {this.state.a && (
          <SelectedBeast
            data={this.state.beast}
            title={this.state.theSelected}
            show={this.state.a}
            bool={this.handleA}
            des={this.state.desc}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
