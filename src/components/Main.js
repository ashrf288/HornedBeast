import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      theSelected: '',
      descr: '',
    };
  }
  select =(theName, description) => {
    let state = this.state;
    state.theSelected = theName;
    state.descr = description;
    this.setState(state);
    console.log(this.state.descr);
    this.props.select(this.state.theSelected, this.state.descr);
  };
  render() {
    return (
      <div className='main'>
        {this.props.hornes === 0
          ? this.props.data.map((beast) => {
            return (
              <HornedBeasts
                data={beast}
                key={beast.title}
                selected={this.select}
              />
            );
          })
          : this.props.data.map((beast) => {
            return (
              beast.horns === this.props.hornes && (
                <HornedBeasts
                  data={beast}
                  key={beast.title}
                  selected={this.select}
                />
              )
            );
          })}
      </div>
    );
  }
}

export default Main;
