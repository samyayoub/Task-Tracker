import { useTheme } from "../context/ThemeContext";

// Import photos, logos and buttons
import homeLogo from '../img/home.svg'
import trackLogo from '../img/trackLogo.svg'
import dashboard from '../img/dashboard.svg'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {

    const { theme, toggleTheme } = useTheme();

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
                <div className="themeIconContainer">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}