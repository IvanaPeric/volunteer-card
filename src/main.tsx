import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import OpportunityDetails from './pages/OpportunityDetails';
import ProjectDetails from './pages/ProjectDetails';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/opportunity/:id" element={<OpportunityDetails />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
