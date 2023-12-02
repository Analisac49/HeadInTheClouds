import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import ShowDetails from '../Components/ShowDetails';

const MyRoutes = ({ shows }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/show/:id" element={<ShowDetails shows={shows} />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
