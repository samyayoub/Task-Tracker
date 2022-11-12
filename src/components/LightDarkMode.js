import LightModeLogo from '../img/lightModeLogo.svg'
import DarkModeLogo from '../img/darkModeLogo.svg'
import LightToggle from '../img/toggleLight.svg'
import DarkToggle from '../img/toggleDark.svg'

import {Container, Row, Col} from 'react-bootstrap'

export default function LightDarkMode() {
    
    function handleClick()  {
        console.log("test for light/dark mode")
    }

    // const switchBtn = {
        
    // }

    return(
        <div className="lightDarkContainer ml-auto">
            <Container className="">
                <Row className="ml-auto">
                    <Col onClick={handleClick}>
                        <img src={LightModeLogo} alt="Light Mode Logo" className="lightDarkIconImages" />            
                    </Col>
                    <Col>            
                        <img src={LightToggle} alt="Light Dark Switch" className="lightDarkIconImages" />
                    </Col>
                    <Col>
                        <img src={DarkModeLogo} alt="Dark Mode Logo" className="lightDarkIconImages" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}