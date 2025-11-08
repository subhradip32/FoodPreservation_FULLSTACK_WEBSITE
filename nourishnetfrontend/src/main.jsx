import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// pages 
import LandngPage from '../pages/landingpage';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import Marketplace from '../pages/marketplace';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandngPage className="overflow-x-hidden"/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/marketplace" element={<Marketplace/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
