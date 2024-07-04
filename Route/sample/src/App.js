
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
