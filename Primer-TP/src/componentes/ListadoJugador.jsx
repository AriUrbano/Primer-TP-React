import React from 'react';
import Jugador from './Jugador';

function ListadoJugador() {
  return (
    <div>
        <Jugador nombre="Lionel Messi" dorsal={10} edad={36} equipo="Inter Miami"/>
        <button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  );
}

export default ListadoJugador;