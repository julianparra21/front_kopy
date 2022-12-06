import React from 'react'
import {NavLink} from 'react-router-dom';
import'../assets/navegador.css';
import logo from '../assets/img/logo.png';
import busqueda from '../assets/img/busqueda.png';


function Navegador() {
    return(
        <body>
            <header>
        <nav>
        <img src={logo} className="logo" alt="logo" />
     
            
            <form className="busquedaP" action="">
    
            <input className="buscar" type="text" name="busqueda" placeholder="Buscar" autocomplete="on"/>
            <input className="button-buscador"type="image" src={busqueda}/>
            
            </form>
    
            <a className="inicio" href="">Iniciar sesion</a>
            <a className="registro" href="">Registro</a>
            
        </nav>
    
        <div className="lista-principal">
    
            <div className="listI"><NavLink to="/" className="a">Inicio</NavLink></div>
            <div className="list"><li>|</li></div>
            <div className="listI"><NavLink to="/Catalogo" className="a">Catalogo</NavLink></div>
            <div className="list"><li>|</li></div>
            <div className="listI"><NavLink to="/Categoria" className="a">Categorias</NavLink></div>
            <div className="list"><li>|</li></div>
            <div className="listI"><NavLink to="/Nosotros" className="a">Nosotros</NavLink></div>
            
        </div>
    </header>
        </body>
    )
}

export default Navegador