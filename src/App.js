import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Work from './pages/Work';
import ContactMe from './pages/ContactMe';
import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container fluid className="bg-dark py-5">
          <Routes>
            <Route exact path="/" element={<AboutMe />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/contactme" element={<ContactMe />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
