import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ListParticipantsPage from './pages/ListParticipantsPage';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 className="app-title">Mon application de participants</h1>
        <nav>
          <ul>
            <li>
              <Link to="/register" className="nav-link">Enregistrer un participant</Link>
            </li>
            <li>
              <Link to="/participants" className="nav-link">Liste des participants</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/participants" element={<ListParticipantsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



