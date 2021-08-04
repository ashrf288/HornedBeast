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
    console.log(this.props.data);
    this.setState({
      setShow: value,
    });

    this.props.bool(!value);
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
          <Modal.Header >
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: 'center'}}>
            <img
              src={this.props.data.image_url}
              alt={this.props.data.title}
              style={{ height: '250px', textAlign: 'center' }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => this.handleShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
