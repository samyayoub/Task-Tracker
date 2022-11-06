import React, { useState } from 'react';

// Import items for Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import all images
import addTaskBtn from '../img/addTaskBtn.svg'
import addButton from '../img/addButton.svg'
import subtractButton from '../img/subtractButton.svg'

export default function Track() {

    const [show, setShow] = useState(false);
    const [task, setTask] = useState({
        duration: "15",
        tag: "Creative Content Creating"
    })

    const handleClose = () => setShow(false);

    function test() {
        console.log("clicked")
    }

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
                aria-labelledby="contained-modal-title-vcenter"
                centered="true"
            >
                <Modal.Header className="modalTitle">
                    <Modal.Title className="mx-auto">Start tracking your next task</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody mx-auto">
                    <Container>
                        <Row>
                            <Col>
                                <div className="col-md-4 mx-auto">
                                    <Form.Group controlId="taskDate">
                                        <Form.Label class="modalTxt">Select Date</Form.Label>
                                        <Form.Control type="date" name="taskDate" placeholder="Date of Task" />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col>
                                <div className="mx-auto">
                                    <p class="modalTxt">Select Tags</p>
                                    <ul>
                                        <li>
                                            {task.duration}
                                        </li>
                                        <li>
                                            {task.tag}
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Container fluid="sm" className="mx-auto">
                            <div className="mx-auto">
                                <p class="modalTxt" id="durationTxt">Select Duration</p>
                                <Row className="align-items-center">
                                    <Col xs={true}>
                                        <button className="addAndSubtractTimeBtn" variant="light" onClick={test}>
                                            <img src={addButton} alt="" />
                                        </button>
                                    </Col>
                                    <Col xs={true}>
                                        <p>15 minutes</p>
                                    </Col>
                                    <Col xs={true}>
                                        <button className="addAndSubtractTimeBtn" variant="light" onClick={test}>
                                            <img src={subtractButton} alt="" />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Container>
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