import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Save(props) {
    const [show, setShow] = useState(false);

    const save = () => {props.handleTrackerSubmit(); handleClose();}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Save List
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Save List!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure that you want to save the state of the <b>Total Points Tracker</b>?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                No
            </Button>
            <Button variant="primary" onClick={save}>
                Yes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Save;