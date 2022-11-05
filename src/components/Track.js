import addTaskBtn from '../img/addTaskBtn.svg'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat leo sem, nec commodo dui convallis non. Sed eget posuere mauris. Vestibulum non nunc ut metus pellentesque rhoncus vitae vitae erat. Pellentesque quis lobortis eros, a blandit lacus. Sed dolor tellus, sagittis vel egestas a, viverra non magna. Nullam quis libero laoreet, feugiat metus in, ornare odio. Aenean odio sem, fringilla et leo eget, pharetra ornare velit. Ut scelerisque sapien ac viverra faucibus.
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Button variant="outline-success" onClick={handleClose} className="closeModalButton">
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}