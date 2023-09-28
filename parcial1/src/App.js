import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Libros from './components/Libros';
import LibroDetail from './components/LibroDetail';
import { useState } from 'react';

function App() {
  const [datos, setDatos] = useState();
  const [usuario, setUsuario] = useState("{}");
  return (
    <div className='App' style={{backgroundColor:'grey', width:'100%', height:'100%', minHeight:'100vh', margin:'auto'}}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/libros" element={<Libros datos={datos} setDatos={setDatos} usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/libros/:libroId" element={<LibroDetail datos={datos} setDatos={setDatos} usuario={usuario} setUsuario={setUsuario} />} /> 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
