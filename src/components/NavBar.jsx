import CartWidget from "./CartWidget"
import LogotipoGradient from '../../public/img/Logotipo Gradient.png'
import LogotipoBlack from '../../public/img/Logotipo Black.png'
import {NavLink } from "react-router-dom"
export default function NavaBar(){

    return(
        <header id="Header_merch">
            <nav>
                <div className="Icono" id="Fade">
                <NavLink to={`/`}><img src={LogotipoGradient} alt="Santi Saracho Icono"></img></NavLink>
                <NavLink to={`/`}><img src={LogotipoBlack} alt="Santi Saracho Icono" className="top"></img></NavLink>
                {/* <a href="./pagina_principal.html"><img src={LogotipoGradient} alt="Santi Saracho Icono" ></img></a>
                <a href="./pagina_principal.html"><img src={LogotipoBlack} alt="Santi Saracho Icono" className="top"></img></a> */}
                </div>
            <ul>
                <div className="Maincat">
                    <li><NavLink to={`/`}>Inicio</NavLink></li>
                    <li><NavLink to={`/`}>Ofertas Semanales</NavLink></li>
                    <li><NavLink to={`/`}>Beats</NavLink></li>
                    <li><NavLink to={`/`}>Merchandising</NavLink></li>
                    <li><NavLink to={`/`}>Contactanos</NavLink></li>
                    <li><CartWidget></CartWidget></li>
                </div>
                <div className="Subcat">
                    <li><NavLink to={`/category/Remera`}>Remeras</NavLink></li>
                    <li><NavLink to={`/category/Gorra`}>Gorras</NavLink></li>
                </div>
            </ul>
            </nav>
        </header>
    )
}