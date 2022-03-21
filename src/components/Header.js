import React from 'react';
import icon from './images/icon.jpg';
const Header = () => {
    return (  
        <header className=''>
            <div id='' className='app-header color'>
                <p className='nombre-usuario'>Bienvenido a mi portafolio, yo soy <span>Bastian</span></p>
                <nav className='nav-principal'>
                    <div className='divNav'>
                        <a href='#'>Inicio</a>
                        <a href='#datos'>Mis datos</a>
                        <a href='#portafolio'>Mi portafolio</a>
                        <a href='#contactos'>Mis contactos</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;