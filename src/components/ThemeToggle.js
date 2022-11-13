import { useTheme } from "../context/ThemeContext";
import useEffect from 'react';

// Import images, buttons and logos
import sun from '../img/sun.svg'
import moon from '../img/moon.png'

const ThemeToggle = () => {
  
  const { theme, toggleTheme } = useTheme();
  const chooseThemeImage = (theme === 'lightTheme' ? moon : sun);

  if (theme === 'lightTheme') {
    document.body.classList.remove('darkTheme');
    document.body.classList.add('lightTheme');
  } else  {
    document.body.classList.remove('lightTheme');
    document.body.classList.add('darkTheme');
  }
  
  return (
    <div>
        <img 
            src ={chooseThemeImage}
            alt="Sun Light Mode" 
            className="themeIconImages"
            theme={theme}
            onClick={toggleTheme}
        />
    </div>
  );
};

export default ThemeToggle;