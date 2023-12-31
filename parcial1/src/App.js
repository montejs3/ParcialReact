import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Loginp from './components/Loginp';
import Carros from './components/Carros';
import CarroDetail from './components/CarroDetail';
import { useState } from 'react';

function App() {
  const [usuario, setUsuario] = useState(0);
  return (
    <div className='App' style={{backgroundColor:'white', width:'100%', height:'100%', minHeight:'100vh', margin:'auto'}}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Loginp usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/carros" element={<Carros/>} />
          <Route path="/carros/:carroId" element={<CarroDetail usuario={usuario} setUsuario={setUsuario} />} /> 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
