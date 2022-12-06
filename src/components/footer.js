import React from 'react'
import'../assets/footer.css';



function Footer() {
    return(
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
    )
}

export default Footer