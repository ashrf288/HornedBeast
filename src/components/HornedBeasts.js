import React, { Component } from "react";

class HornedBeasts extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <img
          style={{ width: "100px" }}
          src={this.props.data.image_url}
          alt=""
          title=""
        />
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
