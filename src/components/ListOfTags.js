import {Form} from 'react-bootstrap';

// Import Bootstrap items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ListOfTags(props)    {

    const tmpTags = props.tags
    return  (
        <Form>
            <p className="modalTxt">Select Tag</p>
            {tmpTags.map((tag) => (
                <div key={tag} className="mb-3 tagContainer tagBtnWithText">
                    <Form.Check
                        label={tag}
                        name="tagGroup"
                        type="radio"
                        id={tag}
                        className=""
                    />
                </div>
            ))}
      </Form>
    )
}