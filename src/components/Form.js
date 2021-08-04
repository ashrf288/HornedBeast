import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class List extends Component {
  constructor() {
    super();
    this.state = {
      hornes: "",
    };
  }
  changeHandler = (e) => {
    let state=this.state;
    state.hornes=e.target.value;
    this.setState(state);
    this.props.filter(parseInt(this.state.hornes));
  };
  render() {
    return (
      <div>
        <Form.Select aria-label="Default select example" onChange={(e) => this.changeHandler(e)}>
          <option value="0" >How Many Hornes</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">100 hornes</option>
        </Form.Select>
      </div>
    );
  }
}

export default List;
