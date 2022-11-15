import React, { useState } from 'react';
import ListOfTags from './ListOfTags';

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
        duration: 15,
        tag: ""
    })

    const handleClose = () => setShow(false);

    function subtract15Minutes() {
        setTask((prevTask) => {
            return {...prevTask, duration: prevTask.duration - 15}
        })
        console.log(task.duration)
    }

    function add15Minutes() {
        setTask((prevTask) => {
            return {...prevTask, duration: prevTask.duration + 15}
        })
        console.log(task.duration)
    }

    const tmpArrayOfTags = ["Studying", "Creative Content Creating", "Playing"];
    const listTags = tmpArrayOfTags.map(oneTask => (
        <ListOfTags value={oneTask} />
    ))

    function handleClick() {
        return (
            alert("alert")
        )
    }

    return (
        <>
            <div className="trackContainer">
                <h1 className="trackText">
                    Start Tracking your Next Task
                </h1>
                <button className="addTaskBtn" variant="primary" onClick={() => setShow(true)}>
                    <img src={addTaskBtn} alt="" id="bigBtn"/>
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
                        <Row className="align-items-center rowModal">
                            <Col className="columnModal">
                                <div className="col-md-8 mx-auto">
                                    <Form.Group controlId="taskDate">
                                        <Form.Label class="modalTxt">Select Date</Form.Label>
                                        <Form.Control type="date" name="taskDate" placeholder="Date of Task" />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col className="columnModal">
                                <div className="mx-auto">
                                    <p className="modalTxt">Select Tag</p>
                                    <ul className="listTags">
                                        <button className="tagsBtns" onClick={handleClick} type="button">
                                            <li className="listTagsLi">
                                                {listTags}
                                            </li>
                                        </button>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Container fluid="sm" className="mx-auto containerModal">
                            <div className="mx-auto">
                                <p class="modalTxt" id="durationTxt">Select Duration</p>
                                <Row className="align-items-center rowModal">
                                    <Col xs={true}>
                                        <button className="addAndSubtractTimeBtn" variant="light" onClick={subtract15Minutes}>
                                            <img src={subtractButton} alt="Subtract Time" />
                                        </button>
                                    </Col>
                                    <Col xs={true}>
                                        <p>{task.duration} minutes</p>
                                    </Col>
                                    <Col xs={true}>
                                        <button className="addAndSubtractTimeBtn" variant="light" onClick={add15Minutes}>
                                            <img src={addButton} alt="Add Time" />
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