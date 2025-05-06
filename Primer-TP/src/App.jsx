import React from 'react';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import './App.css';


function App() {
  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario/>
          </div>
          <div className="one-half column">
           <Listado/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;