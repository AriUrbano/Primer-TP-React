import React from 'react';

function FormularioJugador() {
    return (
      <div>
        <h2>Agregar Nuevo Jugador</h2>
        <form>
          <label>Nombre del jugador</label>
          <input type="text"/>
          <label>Numero de dorsal</label>
          <input type="number"/>
          <label>Edad</label>
          <input type="number"/>
          <label>Descripcion</label>
          <textarea placeholder= "Descripción"></textarea>
          <button type="submit">Agregar Jugador</button>
        </form>
      </div>
    );
  }
  
  export default FormularioJugador;