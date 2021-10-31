import React, { useContext } from "react";
import "./producto.css";
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./productoItem";
import { BoxIconElement } from "boxicons";

const ProductosLista = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos

    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="productos">
            {
                productos.map(producto=>(
                    <ProductoItem 
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    cantidad={producto.cantidad}
                    />
                ))
            }

        </div>
        </>
    )
}    

export default ProductosLista;

