import CarritoIcon from '../assets/cd-cart.svg'
export default function CartWidget(){
    return(
        <div className="Carrito_icon">
            <img src={CarritoIcon} className="Carrito_icon"></img>
            <span>1</span>
        </div>
    )
}
