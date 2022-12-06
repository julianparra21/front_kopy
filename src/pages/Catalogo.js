import React from 'react'
import'../assets/catalogo.css';
import cafeOscu from '../assets/img/cafe-oscuro.jpg';
import croasan from '../assets/img/croasan.jpg';
import panGalleta from '../assets/img/pan-galleta.jpg';
import cafeRosa from '../assets/img/caferosa.jpg';
import cafeLeche from '../assets/img/cafe-leche.jpeg';
import cafeMora from '../assets/img/cafemora.jpg';
import mango from '../assets/img/caFE-mango.jpg';
import cafeVerde from '../assets/img/cafeverde.jpg';
import cafeFusion from '../assets/img/cafe-fusion.jpg';
import galletasr from '../assets/img/gaelletas-rellenas.webp';
import capuchino from '../assets/img/capuchino.jpg';
import galletasA from '../assets/img/gaelltas-azules.jpg';
import cafesito from '../assets/img/cafe.jpg';
import cafeHelado from '../assets/img/cafe-helado.jpg';
import galletasChispas from '../assets/img/galletas-chispas.jpg';
import milo from '../assets/img/milo.webp';
import panCasero from '../assets/img/pan-casero.jpg';
import huevosRE from '../assets/img/huevos-revueltos.webp';
import frito from '../assets/img/huevo-frito.jpg';
import perico from '../assets/img/perico.jpg';
import jugoMango from '../assets/img/jugo-mango.jpg';
import chocolate from '../assets/img/chocolate.jpg';
import calentado from '../assets/img/calentado.jpg';
import cale from '../assets/img/cale.webp';
import buñuelo from '../assets/img/buñuelo.jpg';
import chocolateS from '../assets/img/chocolate-sin.jpg';
import panQueso from '../assets/img/pan-de-queso.jpg';
import jugoNaranja from '../assets/img/jugo-naranja.webp'; 


function Catalogo() {
    return(
    <body>
    <main>
    <section className="fondo-blanco">
        <h1 className='todosP'>Todos los productos</h1>
    </section>

    <section className="catalogo">
        <a className="asil"  href="">
            <img className="coffiba" src={cafeOscu}/>
            <p className="nombre">Cafe oscuro</p>
            <p className="preciaa">$2.000</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={croasan}/>
            <p className="nombre">Croasan</p>
            <p className="preciaa">$1.200</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={panGalleta}/>
            <p className="nombre">Pan galleta</p>
            <p className="preciaa">$1.000</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={cafeRosa}/>
            <p className="nombre">Cafe fresa</p>
            <p className="preciaa">$7.000</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={cafeLeche}/>
            <p className="nombre">Cafe con leche</p>
            <p className="preciaa">$3.000</p>
        </a>
        <a className="asil" href="">
            <img className="coffiba" src={cafeMora}/>
            <p className="nombre">Cafe mora</p>
            <p className="preciaa" >$6.700</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={mango}/>
            <p className="nombre">Cafe mango</p>
            <p className="preciaa">$5.500</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={cafeVerde}/>
            <p className="nombre">Cafe lite</p>
            <p className="preciaa" >$6.500</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={cafeFusion}/>
            <p className="nombre">Cafe fusion</p>
            <p className="preciaa" >$6.500</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={galletasr}/>
            <p className="nombre">Galleta rellena</p>
            <p className="preciaa">$500</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={capuchino}/>
            <p className="nombre">Capuchino</p>
            <p className="preciaa">$5.000</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={galletasA}/>
            <p className="nombre">Galletas azules</p>
            <p className="preciaa">$500</p>
        </a>
        
        <a className="asil"  href="">
            <img className="coffiba" src={cafesito}/>
            <p className="nombre">Cafe con chocolate</p>
            <p className="preciaa">$5.000</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={cafeHelado}/>
            <p className="nombre">Cafe helado</p>
            <p className="preciaa">$8.000</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={galletasChispas}/>
            <p className="nombre">Galleta con chispas de chocolate</p>
            <p className="preciaa">$500</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={milo}/>
            <p className="nombre">Milo</p>
            <p className="preciaa">$1.100</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={panCasero}/>
            <p className="nombre">Pan cassero</p>
            <p className="preciaa">$2.000</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={huevosRE}/>
            <p className="nombre">Huevos revueltos</p>
            <p className="preciaa">$2.500</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={frito}/>
            <p className="nombre">Huevos fritos</p>
            <p className="preciaa">$1.200</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={perico}/>
            <p className="nombre">Huevos pericos</p>
            <p className="preciaa">$1.300</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={jugoMango}/>
            <p className="nombre">Jugo de mango </p>
            <p className="preciaa">$1.200</p>
        </a>
        <a className="asil"  href="">
            <img className="coffiba" src={chocolate}/>
            <p className="nombre">Chocolate con leche</p>
            <p className="preciaa">$2.000</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={calentado}/>
            <p className="nombre">Calentado con huevo</p>
            <p className="preciaa">$3.000</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={cale}/>
            <p className="nombre">Calentado sin huevo</p>
            <p className="preciaa">$2.500</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={buñuelo}/>
            <p className="nombre">Buñuelo</p>
            <p className="preciaa">$1.000</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={chocolateS}/>
            <p className="nombre">Chocolate sin leche</p>
            <p className="preciaa">$800</p>
        </a>
    

        <a className="asil"  href="">
            <img className="coffiba" src={panQueso}/>
            <p className="nombre">Calentado de queso</p>
            <p className="preciaa">$2.000</p>
        </a>

        <a className="asil"  href="">
            <img className="coffiba" src={jugoNaranja}/>
            <p className="nombre">Jugo de naranja </p>
            <p className="preciaa">$1.200</p>
        </a>



    </section>

 </main>   
 
</body>
    )
}

export default Catalogo