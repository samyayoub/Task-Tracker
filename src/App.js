import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Navbar from "./components/Navbar"
import Track from "./components/Track"

import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Imports originally from Index.js
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

// Import different routes
import Login from './components/Login'
import Register from './components/Register'
import AddTask from './components/AddTask';
import { Nav } from 'react-bootstrap';
// import Navbar from './components/Navbar';
////////////////////////////////

function App() {
  // const {theme, toggleTheme} = useTheme();
  // const chooseTheme = (theme === 'lightTheme' ? 'lightTheme' : 'darkTheme');

  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Track />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addtask" element={<AddTask />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
