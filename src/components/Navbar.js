import LightDarkMode from './LightDarkMode'
import homeLogo from '../img/home.svg'
import trackLogo from '../img/trackLogo.svg'
import dashboard from '../img/dashboard.svg'
import { ThemeContext, themes } from '../context/ThemeContext'

export default function Navbar() {
    const [darkMode, setDarkMode] = React.useState(true);
    return  (
        <div>
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
            <div>
                <InputGroup>
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <Button
                                color="link"
                                onClick={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark);
                                }}
                            >
                                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                                <span className="d-lg-none d-md-block">Switch mode</span>
                            </Button>
                        )}
                    </ThemeContext.Consumer>
                </InputGroup>
            </div>
        </div>

    )
}