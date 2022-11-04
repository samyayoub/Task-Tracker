import './App.css';
import Button from 'react-bootstrap/Button'
import Navbar from "./components/Navbar"
import Track from "./components/Track"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Track />
      </main>
    </div>
  );
}

export default App;
