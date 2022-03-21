import React from 'react';
import reactimage from './images/react.png';
import jsimage from './images/js.png';
import reduximage from './images/reduxthunk.png';
import nodeimage from './images/node.png';
import mongoimage from './images/mongo.png';
import htmlimage from './images/html.png';
import css from './images/css.png';
import express from './images/express.png';
import php from './images/php.png';
import java from './images/java.png';

const Herramientas = () => {
    return (
        <div className='herramientas'>
            <div className='herramientas1'>
                <h1 data-aos="fade-right" className='tec-prin'>Tecnologias principales</h1>
                <section className='seccion' data-aos="fade-up">
                    <div className='divherra' >
                        <img title='React' alt='React' className='img1' src={reactimage}></img>
                    </div>
                    <div className='divherra'>
                        <img title='JavaScript' alt='JavaScript' className='img2' src={jsimage}/>
                    </div>
                    <div className='divherra'>
                        <img title='Redux' alt='Redux' className='img1' src={reduximage}></img>
                    </div>
                    <div className='divherra'>
                        <img title='NodeJs' alt='NodeJs' className='img4' src={nodeimage}/>
                    </div>
                    <div className='divherra'>
                        <img title='MongoDb' alt='MongoDb' className='img3' src={mongoimage}/>
                    </div>
                    <div className='divherra'>
                        <img title='Html' alt='Html' className='img3' src={htmlimage}/>
                    </div>
                </section>
            </div>
            <div className='herramientas2'>
                <h2 data-aos="fade-right" className='tec-sec'>Tecnologias secundarias</h2>
                <section className='seccion2' data-aos="fade-down">
                    <div className='divherra'>
                        <img title='Css' alt='Css' className='img12' src={css}/>
                    </div>
                    <div className='divherra'>
                        <img title='ExpressJs' alt='ExpressJs' className='img8' src={express}/>
                    </div>
                    <div className='divherra'>
                        <img title='PhP' alt='Php' className='img9' src={php}/>
                    </div>
                    <div className='divherra'>
                        <img title='Java' alt='Java' className='img9' src={java}/>
                    </div>
                </section>
            </div>
        </div>
    );
}
 
export default Herramientas;