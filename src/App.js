import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Track from "./components/Track"

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  const {theme, toggleTheme} = useTheme();
  const chooseTheme = (theme === 'lightTheme' ? 'lightTheme' : 'darkTheme');

  return (
    <div>
      <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main>
            <Track />
          </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
