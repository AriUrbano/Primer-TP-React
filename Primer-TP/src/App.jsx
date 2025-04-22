import React from 'react';
import FormularioJugador from './components/FormularioJugador';
import ListadoJugadores from './components/ListadoJugadores';
import './App.css';

function App() {
  return (
    <>
      <h1>Administrador de Jugadores de Fútbol</h1>
      <div>
      <Jugador nombre="Lionel Messi" dorsal={10} edad={36} equipo="Inter Miami"/>
      <Jugador nombre="Sergio Ramos" dorsal={4} edad={37} equipo="Sevilla"/>
      <Jugador nombre="Kevin De Bruyne" dorsal={17} edad={32} equipo="Manchester City"/>
        <FormularioJugador />
        <ListadoJugadores />
      </div>
    </>
  );
}

export default App;