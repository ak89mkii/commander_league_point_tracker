import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Reset(props) {
    const [show, setShow] = useState(false);

    const reset = () => {props.resetCard(); handleClose();}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="warning" onClick={handleShow}>
            Reset Tracker
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Reset Tracker!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure that you want to reset the <b>Total Points Tracker</b>?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                No
            </Button>
            <Button variant="primary" onClick={reset}>
                Yes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Reset;