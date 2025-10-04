import './App.css'
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Expirence from './sections/Expirence/Expirence';
import Navbar from './sections/Navbar/Navbar';
import Education from './sections/Education/Education'
{/* <Router> = the overall “routing system.”

    <Routes> = the list of possible paths.

    <Route> = an individual path → component.
*/}
function App() {
  return (
    <Router basename="/jithesh-porto">
      <Navbar></Navbar>
      <Routes>
        {/* Home route */}
        <Route path="/" element={
            <>
            
              <Hero />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          } 
        />

        {/* Experience route */}
        <Route path="/jithesh-porto/expirence" element={<Expirence />} />
        <Route path="/jithesh-porto/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
