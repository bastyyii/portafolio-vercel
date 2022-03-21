import React, {Fragment} from 'react'
import Header from './components/Header';
import Datos from './components/Datos';
import Herramientas from './components/Herramientas';
import Portafolio from './components/Portafolio';
import Titulo from './components/Titulo';
import Contactos from './components/Contactos';

function App() {
  return (
    <Fragment className='fragment'>
      <Header/>
      <div className='contenedor-app'>
        <div className='seccion-principal'>
          <div className='divSec'>
            
            <Datos/>
            <Herramientas/>
            <Portafolio/>
          </div>
          <Contactos/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
