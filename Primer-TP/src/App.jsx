import React from 'react';
import FormularioJugador from './componentes/FormularioJugador';
import ListadoJugadores from './componentes/ListadoJugador';
import './App.css';
import Jugador from './componentes/Jugador';
function App() {
  return (
    <>
      <h1>Administrador de Jugadores de Fútbol</h1>
      <div>
      <FormularioJugador/>
      <ListadoJugadores/>
      </div>
    </>
  );
}

export default App; 