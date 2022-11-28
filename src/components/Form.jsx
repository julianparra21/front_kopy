import React from 'react'
import logo from '../assets/img/logo.png';
import busqueda from '../assets/img/busqueda.png'; 
import mapa from '../assets/img/marcador-de-mapa.png';
import dolar from '../assets/img/dolar.png'
import sonreir from '../assets/img/sonreir.png'
import caferosa from '../assets/img/caferosa.jpg'
import cafeverde from '../assets/img/cafeverde.jpg'
import cafemora from '../assets/img/cafemora.jpg'
import cafe from '../assets/img/cafe.jpg'
import'../assets/App.css';
import Nosotros from './Nosotros';  


function Form() {
   
  return (
      <body>
    <header>
      <nav>
      <img src={logo} className="logo" alt="logo" />

      <form className="busquedaP" action="">
      <input className="buscar" type="text" name="busqueda" placeholder="Buscar" autocomplete="on"></input>
      <input className="button-buscador"type="image" src={busqueda}/>
        
        </form>

        <a className="inicio" href="/inicioSesion">Iniciar sesion</a>
        <a className="registro" href="/iniciar">Registro</a>
      </nav>
      <div className="lista-principal">

        <div className="listI"><a href="" className="ab">Inicio</a></div>
        <div className="list"><li>|</li></div>
        <div className="listI"><a href="" className="a">Catalogo</a></div>
        <div className="list"><li>|</li></div>
        <div className="listI"><a href="" className="a">Categorias</a></div>
        <div className="list"><li>|</li></div>
      

    </div>
    <main>
    <section className="fondo-rosa">
        <h1>Deleitate con nuestros deliciosos productos</h1>
        <h2>Los mejores precios!</h2>
        <a className="CATA" href="">Ver catalogo</a>

    </section>

    <section className="info">
        <div className="hijo">
            <img className="imagen" src={mapa}/>           <p className="parrafo"> Envios a toda la ciudad</p>
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

    <section className>
    <h3>Productos destacados</h3>
        <div className="destacados">
        <a className="as"  href="">
            <img className="coffi" src={caferosa}/>
            <p className="cafep">Cafe fresa</p>
            <p className="precio">$7.000</p>
        </a>
        <a className="as" href="">
            <img className="coffi" src={cafemora}/>
            <p className="cafep">Cafe mora</p>
            <p className="precio" >$6.700</p>
        </a>
        <a className="as"  href="">
            <img className="coffi" src={cafeverde}/>
            <p className="cafep">Cafe lite</p>
            <p className="precio" >$6.500</p>
        </a>
        <a className="as"  href="">
            <img className="coffi" src={cafe}/>
            <p className="cafep">Cafe con chocolate</p>
            <p className="precio">$5.000</p>
        </a>
    </div>

    <a className="botonProdc" href="">Ver mas productos</a>
    </section>

    <section className="seccion">
        <p className="contc">Contactate con Nosotros</p>
        <p className="con">Atencion via whatsapp</p>
        <a className="ayuda" href="">Hablar</a>
    </section>
</main>
<footer>
        <div class="derechos">
            &copy;2022 Los Ilucionistas | tickettrain121@gmail.com
        </div>

        <div className="futo">
        <a className="rayis" href="">Terminos y condiciones</a>
        <p className="raya">|</p>
        <a className="rayis" href="" >Politicas de privacidad</a>
        <p className="raya">|</p>
        <a className="rayis" href="" >Politicas de devolucion</a>
    </div>
    </footer>
    </header>
   </body>
  )
}

export default Form