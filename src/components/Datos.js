import React from 'react';

const Datos = () => {
    return (  
        <div id='datos' className='divDatos' data-aos="fade-right" data-aos-duration="1500">
            <h1 className='h11'>Sobre mi: </h1>
            <div className='modfify-600'>
                <div className='informacion1'>
                    <p>
                        Mi nombre es Bastian Valdivia, recien titulado en la carrera de ingenieria en informatica.
                        Durante mis años de estudio pude obtener conocimientos de diferentes areas de esta carrea 
                        tales como redes, base de datos, y desarrollo web. Es en esta ultima area
                        en la que quise enfocar mi tiempo de estudio para convertirme en desarrollador web FullStack
                    </p>
                </div>
                <div className='informacion2'>
                    <p>
                        Soy una persona autodidacta, con mucho deseo por aprender, adquirir nuevos conocimientos
                        y volverme un mejor profesinal, por esto, para el desarrollo frontend aprendi a trabajar 
                        con el lenguaje de JavaScript y la libreria de React, principalmente con Redux, ademas de 
                        CSS y HTML. En cuanto al desarrollo del backend principalmente utilizo NodeJs y MongoBD. 
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Datos;