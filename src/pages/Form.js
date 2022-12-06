import React from 'react'
import mapa from '../assets/img/marcador-de-mapa.png';
import dolar from '../assets/img/dolar.png'
import sonreir from '../assets/img/sonreir.png'
import caferosa from '../assets/img/caferosa.jpg'
import cafeverde from '../assets/img/cafeverde.jpg'
import cafemora from '../assets/img/cafemora.jpg'
import cafe from '../assets/img/cafe.jpg'
import'../assets/App.css';
import {NavLink} from 'react-router-dom';



function Form() {
   
  return (
      <body>
    
    <main>
    <section className="fondo-rosa">
        <h1 className='tituloForm'>Deleitate con nuestros deliciosos productos</h1>
        <h2>Los mejores precios!</h2>
        <NavLink className="CATA" to="/Catalogo"> Ver catalogo</NavLink>

    </section>

    <section className="info">
        <div className="hijo">
            <img className="imagen" src={mapa}/>           
            <p className="parrafo"> Envios a toda la ciudad</p>
        </div>
        <div><li className="als">|</li></div>

        <div className="hijo">
            <img className="imagene"  src={dolar}/>
            <p className="parrafo"> Todos los medios de pago</p>
        </div>

        <div><li className="alss">|</li></div>

        <div className="hijo">
            <img className="imagenn" src={sonreir}/>
            <p className="parrafo">Cliente satisfecho</p>
        </div>
    </section>

    <section className='productDes'>
    <h3>Productos destacados</h3>
        <div className="destacados">
        <a className="asul"  href="">
            <img className="coood" src={caferosa}/>
            <p className="tituloDestacados">Cafe fresa</p>
            <p className="preciiiio">$7.000</p>
        </a>
        <a className="asul" href="">
            <img className="coood" src={cafemora}/>
            <p className="tituloDestacados">Cafe mora</p>
            <p className="preciiiio" >$6.700</p>
        </a>
        <a className="asul"  href="">
            <img className="coood" src={cafeverde}/>
            <p className="tituloDestacados">Cafe lite</p>
            <p className="preciiiio" >$6.500</p>
        </a>
        <a className="asul"  href="">
            <img className="coood" src={cafe}/>
            <p className="tituloDestacados">Cafe con chocolate</p>
            <p className="preciiiio">$5.000</p>
        </a>
    </div>

    <NavLink className="botonProdc" to="/Catalogo">Ver mas productos</NavLink>
    </section>

    <section className="seccion">
        <p className="contc">Contactate con Nosotros</p>
        <p className="con">Atencion via whatsapp</p>
        <a className="ayuda" href="">Hablar</a>
    </section>
</main>

   </body>
  )
}

export default Form