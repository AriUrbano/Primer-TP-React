import React from 'react';

function Card (Jugador)
{
    return (
    <div>
    <ul><h5>{Jugador.nombre}</h5></ul>
    <ul><p>{Jugador.descripcion}</p></ul>
    </div>
    );  
}
export default Card