import { useTheme } from "../context/ThemeContext";
import { Link, Outlet } from "react-router-dom";

// Import photos, logos and buttons
import homeLogo from '../img/home.svg'
import trackLogo from '../img/trackLogo.svg'
import dashboard from '../img/dashboard.svg'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {

    // const { theme, toggleTheme } = useTheme();

    return  (
        <div>
            <div className="Navbar">
                <div className="iconContainer">
                    <Link to="/">
                        <img src={homeLogo} alt="" className="iconImages"/>
                    </Link>
                </div>
                <div className="iconContainer">
                    <Link to="AddTask">
                        <img src={trackLogo} alt="" className="iconImages"/>
                    </Link>
                </div>
                <div className="iconContainer">
                    <Link to="Login">
                        <img src={dashboard} alt="" className="iconImages"/>
                    </Link>
                </div>
                <div className="themeIconContainer">
                    <ThemeToggle />
                </div>
            </div>
            <Outlet />
        </div>
    )
}