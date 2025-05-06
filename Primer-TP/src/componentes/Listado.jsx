import React from 'react';
import './Listado.css';
import Cita from './Cita';

const citas = [
  {
    mascota: "Nina",
    propietario: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  },
  {
    mascota: "Sifon",
    propietario: "Flecha",
    fecha: "2023-08-05",
    hora: "09:24",
    sintomas: "Duerme mucho"
  },
  {
    mascota: "Floki",
    propietario: "Ari",
    fecha: "2023-08-05",
    hora: "16:15",
    sintomas: "No está comiendo"
  }
];

const Listado = () => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <Cita 
          key={index}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
};

export default Listado;