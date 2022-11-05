import addTaskBtn from '../img/addTaskBtn.svg'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';

export default function Track() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

 
    return (
        <>
            <div className="trackContainer">
                <h1 className="trackText">
                    Start Tracking your Next Task
                </h1>
                <button className="addTaskBtn" variant="primary" onClick={() => setShow(true)}>
                    <img src={addTaskBtn} alt="" />
                </button>
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={true}
                size="lg"
                dialogClassName="modalLayout"
                centered="true"
            >
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <div className="row">
                        <div className="col-md-4">
                            <Form.Group controlId="taskDate">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="taskDate" placeholder="Date of Task" />
                            </Form.Group>
                        </div>
                        <div>
                            <p>Select Tags</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Button variant="outline-success" onClick={handleClose} className="closeModalButton">
                            Add Task
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}