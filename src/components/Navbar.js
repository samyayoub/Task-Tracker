import homeLogo from '../img/home.svg'
import trackLogo from '../img/trackLogo.svg'
import dashboard from '../img/dashboard.svg'

export default function Navbar() {
    return  (
        <div className="Navbar">
            <div className="iconContainer">
                <img src={homeLogo} alt="" className="iconImages"/>
            </div>
            <div className="iconContainer">
                <img src={trackLogo} alt="" className="iconImages"/>
            </div>
            <div className="iconContainer">
                <img src={dashboard} alt="" className="iconImages"/>
            </div>
        </div>
    )
}