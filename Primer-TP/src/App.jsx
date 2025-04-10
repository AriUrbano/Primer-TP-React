import React from 'react'
import './App.css'
import Pipaaaaaaaa from 'https://media.a24.com/p/1675cec0ddc22883cb934d1aed82724b/adjuntos/296/imagenes/009/106/0009106538/1200x675/smart/benedetto_mgjpg.jpg'


function App() {

  return (
    <>
      <div>
      <form>
  <div class="mb-3">
    <label class="form-label">Nombre</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Apellido</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Dorsal</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Equipo</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>   
      </div>

      <div class="card" style="width: 18rem;">
  <img src={Pipaaaaaaaa} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </>
  )
}

export default App
