import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
  constructor() {
    super();
    this.state = {
      setShow: true,
      favorite: 0,
    };
  }
  handleShow = (value) => {
    // console.log(data);

    // let theOneTitle = beast[0].title;

    this.setState({
      setShow: value,
    });
    //     console.log(this.beastN()[0].title);
    //     // console.log(beast[0].title);
    //     console.log(this.state.title);
    //     this.beastN();
    this.props.bool(!value);
    //   };

    //   beastN = () => {
    //     let state = this.state;
    //     state.title = data.filter((obj) => obj.title === this.props.title);
    //     this.setState(state);
  };
  clickHandler = () => {
    this.setState({
      favorite: this.state.favorite + 1,
    });
  };

  render() {
    return (
      <>
        <Button
          variant='primary'
          onClick={() => this.handleShow(this.props.show)}
        >
          Launch static backdrop modal
        </Button>

        <Modal
          show={this.state.setShow === true}
          onHide={this.handleShow}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.des}</Modal.Body>
          <Modal.Footer>
            <span> favorite : {this.state.favorite} </span>
            {''}
            <span
              style={{ color: this.state.clicked ? 'CaptionText' : 'blue' }}
            >
              &#9825;
            </span>
            <Button variant='secondary' onClick={() => this.handleShow(false)}>
              Close
            </Button>
            <Button variant='primary' onClick={this.clickHandler}> vote</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
