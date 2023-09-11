import { useState, useEffect } from "react"
import productos from "../../public/storage/data.json"
import { useParams } from "react-router-dom"


function asyncMock(id){/* FUNCION QUE FILTRA Y DEVUELVE EN UNA PROMESA EL JSON DE PRODUCTOS SEGUN id */
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
                const resultado = productos.find(item => item.identificador === id)
                resolve(resultado)
        }, 500)
    })
}
export default function ItemDetailContainer(){
    const [Prod, setProd] = useState();
    const {id} = useParams()

    useEffect(() => {/* Efecto que se actica cuando se renderiza el componente y cuando se actualiza el estado de los productos  */
        asyncMock(id).then(res => setProd(res))/* Utiliza la funcion asyncMock para filtrar los productos provenientes por el parametro id y setea el estado de los productos filtrados*/
    }, [id]);/* Y se actualiza con cada distinto id que le pongamos */
    console.log(id);
    console.log(asyncMock(id));
    console.log(Prod);
    if (Prod) {  
        return(
            <div className="Div_product">
                <div className="Product_container">
                    <div className="Card_product">
                        <img src={Prod.img} alt="" />
                    </div>
                    <div className="ButtonDetail_container">
                        <div className="Detail_container">
                        <h2>{Prod.producto}</h2>
                        <h3>AR$ {Prod.precio}</h3>
                        </div>
                        <a href="#0" id="Boton_comprar">Comprar</a>
                    </div>
                </div>
            </div>
        )
    }
}