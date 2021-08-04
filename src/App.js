import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from '../src/components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectedBeast from './components/SelectedBeast';
import List from './components/Form';
class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      show: false,
      desc: '',
      beast: {},
      beastFilter: 0,
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
    this.setState({ show: true });
    console.log(this.state.theSelected);
  };
  handleA = () => {
    this.setState({ show: false });
  };
  hornesNum = (num) => {
    console.log(num);
    let state = this.state;
    state.beastFilter = num;
    this.setState(state);
  };

  render() {
    return (
      <div>
        <Header />
        <List filter={this.hornesNum} />
        <Main data={data} select={this.selectedName} hornes={this.state.beastFilter} />
        {this.state.show && (
          <SelectedBeast
            data={this.state.beast}
            title={this.state.theSelected}
            show={this.state.show}
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
