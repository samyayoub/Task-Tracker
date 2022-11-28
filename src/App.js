import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from "./components/Navbar"
import Track from "./components/Track"
import Auth from "./components/Auth"
import Login from './components/Login'
import Register from './components/Register'

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  // const {theme, toggleTheme} = useTheme();
  // const chooseTheme = (theme === 'lightTheme' ? 'lightTheme' : 'darkTheme');

  return (
    <BrowserRouter>
      <ThemeProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <header>
            <Navbar />
          </header>
          <main>
            <Track />
          </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
