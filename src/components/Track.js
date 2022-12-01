import React from 'react';
import { Link } from 'react-router-dom';

// Import items for Bootstrap
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import all images
import addTaskBtn from '../img/addTaskBtn.svg'

export default function Track() {

    return (
        <>
            <div className="trackContainer">
                <h1 className="trackText">
                    Start Tracking your Next Task
                </h1>
                <button 
                    className="addTaskBtn" 
                    variant="primary" 
                >
                    <Link to="AddTask">
                        <img src={addTaskBtn} alt="" id="bigBtn"/>
                    </Link>
                </button>
            </div>
        </>
    )
}