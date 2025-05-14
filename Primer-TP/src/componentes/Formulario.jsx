import { useState } from 'react';
import './Formulario.css';

const Formulario = (Datos) => {
  const [contenido] = useState('');

  const tomarValores = (e) =>{ 
    e.preventDefault();
    console.log(contenido);
    Datos(contenido);
  }
  return (
    <div>
      <h2>Crear mi Cita</h2>
      <form onSubmit={tomarValores}>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota" 
          className="u-full-width" 
          placeholder="Nombre Mascota" 
        />
        
        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario" 
          className="u-full-width" 
          placeholder="Nombre dueño de la mascota" 
        />
        
        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha" 
          className="u-full-width" 
        />
        
        <label>Hora</label>
        <input 
          type="time" 
          name="hora" 
          className="u-full-width" 
        />
        
        <label>Síntomas</label>
        <textarea 
          name="sintomas" 
          className="u-full-width"
        ></textarea>
        
        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;