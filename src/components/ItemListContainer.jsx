import { useEffect, useState } from "react"
import productos from "../../public/storage/data.json"
import { Link, useParams } from "react-router-dom"

function asyncMock(id){/* FUNCION QUE FILTRA Y DEVUELVE EN UNA PROMESA EL JSON DE PRODUCTOS SEGUN id */
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(id == null) {
                resolve(productos)
            }else{
                const resultado = productos.filter(item => item.category === id)
                resolve(resultado)
            }
        }, 1500)
    })
}

export default function ItemListContainer(){
    const [Cat, setCat] = useState([]); /* ESTADO DE LAS CATEGORIAS (FILTRADAS O NO) DE LOS PRODUCTOS DEL JSON */
    const {id} = useParams()

    useEffect(() => {/* Efecto que se actica cuando se renderiza el componente y cuando se actualiza el estado de los productos  */
        asyncMock(id).then(res => setCat(res))/* Utiliza la funcion asyncMock para filtrar los productos provenientes por el parametro id y setea el estado de los productos filtrados*/
    }, [id]);/* Y se actualiza con cada distinto id que le pongamos */
    console.log(Cat);
    return(
        <div className="ItemListCont" id="Main_merch">
            <div id="Grid_container">
                <ul className="Products_grid" id="Products_grid">
                    {Cat.map(prod => 
                        {if (prod.style == "Dark") {
                            return(
                                <li key={prod.identificador} className="Grid_item">
                                <Link to={`/item/${prod.identificador}`}>
                                    <div className="Product_card">
                                        <div className="Card_info">
                                            <h3 className="Product_title">{prod.productoCard}</h3>
                                            <div className="text_hovered">
                                                <h3 className="Product_title_hovered White_text_h">{prod.productoCard}</h3>
                                            </div>
                                            <div className="Price">
                                                <p className="Price_txt White_text">${prod.precio}</p>
                                                <p className="Price_hovered White_text_h">${prod.precio}</p>
                                            </div>
                                        </div>
                                        <div className="Card_product">
                                            <img src={prod.img} alt=""></img>
                                            <span><h3 className="Add_Carrito White_text_h">Añadir al carrito </h3></span>
                                        </div>
                                    </div>
                                </Link>
                                </li>                        
                            )
                        }
                        else{
                            return(
                                <li key={prod.identificador} className="Grid_item">
                                <Link to={`/item/${prod.identificador}`}>
                                    <div className="Product_card">
                                        <div className="Card_info">
                                            <h3 className="Product_title">{prod.productoCard}</h3>
                                            <div className="text_hovered">
                                                <h3 className="Product_title_hovered">{prod.productoCard}</h3>
                                            </div>
                                            <div className="Price">
                                                <p className="Price_txt">${prod.precio}</p>
                                                <p className="Price_hovered">${prod.precio}</p>
                                            </div>
                                        </div>
                                        <div className="Card_product">
                                            <img src={prod.img} alt=""></img>
                                            <span><h3 className="Add_Carrito">Añadir al carrito </h3></span>
                                        </div>
                                    </div>
                                </Link>
                                </li>
                            )
                        }}
                    )}
                </ul>
            </div>
        </div>
    )
}