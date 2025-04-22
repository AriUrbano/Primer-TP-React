import React from 'react';


function Jugador(Jugador) {
    return (
      <div>
        <h2>Nombre: {Jugador.nombre}</h2>
        <p>Dorsal: {Jugador.dorsal}</p>
        <p>Edad: {Jugador.edad}</p>
        <p>Equipo: {Jugador.equipo}</p>
      </div>
    );
  }

export default Jugador;