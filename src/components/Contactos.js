import React from 'react';
import lin from './images/lin.png';
import git from './images/git.png';
import gml from './images/gml.png';

const Contactos = () => {
    return (  
        <div id='contactos' className='divContactos'>
            <div className='herramientas1'>
                <h3 className='h3contactos' >Contactos</h3>
                <section className='seccion4'>
                    <div className='divherra'>
                        <a href="mailto:bastivaldi15@gmail.com"
                            ><img className='imgmail' src={gml} />
                        </a>
                    </div>
                    <div className='divherra'>
                        <img className='imgcontactos' src={lin} />
                    </div>
                    <div  className='divherra'>
                        <img className='imgcontactos' src={git} />
                    </div>
                </section>
            </div>
        </div>
    );
}
 
export default Contactos;