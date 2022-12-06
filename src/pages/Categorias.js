import React from 'react'
import'../assets/categorias.css';
import cafes from '../assets/img/cafes.jpg';
import pan from '../assets/img/pan.jpeg';
import jugosNa from '../assets/img/JUGOS_NATURALES.jpg';
import galletas from '../assets/img/galletas.jpg';
import desayunos from '../assets/img/desayunos.jpg';
import chol from '../assets/img/chcol.jpg';


function Categoria() {
    return(
       <body>

    <main>
        <section class="fondo-corazon">
            <h1 className='todasCategor'>Todas las categorias</h1>
        </section>

        <section class="categorias">
        <a class="asñpl"  href="">
            <img class="cimagi" src={cafes}/>
            <p class="nombreDeCategoria">Cafe</p>
        </a>

        <a class="asñpl"  href="">
            <img class="cimagi" src={pan}/>
            <p class="nombreDeCategoria">Panes</p>
        </a>

        <a class="asñpl"  href="">
            <img class="cimagi" src={jugosNa}/>
            <p class="nombreDeCategoria">Jugos</p>
        </a>

        <a class="asñpl"  href="">
            <img class="cimagi" src={galletas}/>
            <p class="nombreDeCategoria">Galletas</p>
        </a>

        
        <a class="asñpl"  href="">
            <img class="cimagi" src={desayunos}/>
            <p class="nombreDeCategoria">Desayunos</p>
        </a>

        <a class="asñpl"  href="">
            <img class="cimagi" src={chol}/>
            <p class="nombreDeCategoria">Chocolates</p>
        </a>
    </section>

    </main>

    
       </body>
    )
}

export default Categoria