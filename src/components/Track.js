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
    const [tags, setTags] = useState(["Studying", "Creative Content Creating", "Playing"])

    const handleClose = () => setShow(false);

    function subtract15Minutes() {
        setTask((prevTask) => {
            return {...prevTask, duration: prevTask.duration - 15}
        })
    }

    function add15Minutes() {
        setTask((prevTask) => {
            return {...prevTask, duration: prevTask.duration + 15}
        })
    }

    // const tmpArrayOfTags = ["Studying", "Creative Content Creating", "Playing"];
    // const listTags = tmpArrayOfTags.map(oneTask => (
    //     <ListOfTags value={oneTask} />
    // ))

    function handleClick() {
        return (
            console.log("handleClick")
        )
    }
    
    function handleAddTask() {
        return (
            console.log("handleAddTask")
        )
    }



    return (
        <>
            <div className="trackContainer">
                <h1 className="trackText">
                    Start Tracking your Next Task
                </h1>
                <button 
                    className="addTaskBtn" 
                    variant="primary" 
                    onClick={() => setShow(true)}
                >
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
                    <Modal.Title className="mx-auto">
                        Start tracking your next task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody mx-auto">
                    <Container>
                        <Row className="align-items-center rowModal">
                            <Col className="columnModal">
                                <div className="col-md-8 mx-auto">
                                    <Form.Group controlId="taskDate">
                                        <Form.Label class="modalTxt">
                                            Select Date
                                        </Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            name="taskDate" 
                                            placeholder="Date of Task" 
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col className="columnModal">
                                <div className="mx-auto">
                                    <div 
                                        className="tagsBtns listTags" 
                                        onClick={handleClick}
                                    >
                                        <ListOfTags tags={tags}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Container 
                            className="mx-auto containerModal container-fluid"
                        >
                            <div className="mx-auto">
                                <p class="modalTxt" id="durationTxt">
                                    Select Duration
                                </p>
                                <Row className="align-items-center rowModal">
                                    <Col xs={true}>
                                        <button 
                                            className="addAndSubtractTimeBtn col-md-4" 
                                            variant="light" 
                                            onClick={subtract15Minutes}
                                        >
                                            <img 
                                                src={subtractButton} 
                                                alt="Subtract Time" 
                                            />
                                        </button>
                                    </Col>
                                    <Col xs={true} className="text-center">
                                        <p className="col-md-4">{task.duration} minutes</p>
                                    </Col>
                                    <Col xs={true}>
                                        <button 
                                            className="addAndSubtractTimeBtn col-md-4" 
                                            variant="light" 
                                            onClick={add15Minutes}
                                        >
                                            <img 
                                                src={addButton} 
                                                alt="Add Time" 
                                            />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Container fluid="sm">
                        <Row>
                            <Col className="text-center">
                                <Button 
                                    variant="outline-success" 
                                    onClick={handleAddTask} 
                                    className="closeModalButton" 
                                    type="submit"
                                >
                                    Add Task
                                </Button>
                            </Col>
                            <Col className="text-center">    
                                <Button 
                                    variant="outline-warning" 
                                    onClick={handleClose} 
                                    className="closeModalButton"
                                >
                                    Close
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
        </>
    )
}