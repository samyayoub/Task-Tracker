import addTaskBtn from '../img/addTaskBtn.svg'

// Import Bootstrap items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ListOfTags(props)    {

    return(
        <div>
            <Container>
                <Row>
                    <Col className="tagContainer" lg={true}>
                        <img src={addTaskBtn} alt="Add Tag Button" className="tagBtnWithText" />
                        <p className="tagBtnWithText">{props.value}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}