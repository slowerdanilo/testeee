import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'

function App() {
  
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
