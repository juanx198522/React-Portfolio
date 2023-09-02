import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main application component
function App() {
  return (
    <div className="App">
      <Router>
        {/* Navigation bar component */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
          {/* Route for the About page */}
          <Route path='/' element={<About />} />

          {/* Route for the Portfolio page */}
          <Route path='/portfolio' element={<Portfolio />} />

          {/* Route for the Contact page */}
          <Route path='/contact' element={<Contact />} />

          {/* Route for the Resume page */}
          <Route path='/resume' element={<Resume />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;