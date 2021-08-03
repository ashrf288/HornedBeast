import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
class HornedBeasts extends Component {
  constructor() {
    super();
    this.state = {
      favorite: 0,
      clicked: false,
    };
  }
  clickHandler = () => {
    this.setState({
      favorite: this.state.favorite + 1,
      clicked: true,
    });
    this.props.selected(this.props.data.title, this.props.data.description);
  };
  setIsShown = (value) => {
    this.setState({
      clicked: value,
    });
  };
  render() {
    return (
      <div
        className='beast'
        onMouseEnter={() => this.setIsShown(true)}
        onMouseLeave={() => this.setIsShown(false)}
        style={{ background: this.state.clicked ? 'burlywood' : 'white' }}
      >
        <h2>{this.props.data.title}</h2>
        <Col xs={6} md={4}>
          <Image
            className='beastImage'
            onClick={this.clickHandler}
            src={this.props.data.image_url}
            thumbnail
          />
        </Col>
        <span> favorite : {this.state.favorite} </span>
        {''}
        <span style={{ color: this.state.clicked ? 'CaptionText' : 'blue' }}>
          &#9825;
        </span>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
