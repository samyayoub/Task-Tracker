import homeLogo from '../img/home.svg'

export default function Navbar() {
    return  (
        <div className="Navbar">
            <div className="iconContainer">
                <img src={homeLogo} alt="" className="iconImages"/>
            </div>
        </div>
    )
}