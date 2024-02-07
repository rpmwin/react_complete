import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';
import AddPlant from './Pages/AddPlant.jsx';
import PlantDashBoard from './Pages/PlantDashBoard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />}></Route>
          <Route path="addPlant" element={<AddPlant />}></Route>
          <Route path="myPlants" element={<PlantDashBoard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    
  
);
