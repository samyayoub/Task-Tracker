import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
