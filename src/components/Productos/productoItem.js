import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext, DataProvider } from "../../context/Dataprovider";
import { BoxIconElement } from "boxicons";

export const ProductoItem = ({
                    key,
                    id,
                    title,
                    price,
                    cantidad,
}) =>{
    const value = useContext(DataContext)
    const addCarrito = value.addCarrito


    return(
        <div className="producto">
        <div className="producto__footer">
            <h1>{title}</h1>
            <p className="price">${price}</p>
        </div>
    <div className="buttom">
        <button className="btn"  onClick={() => addCarrito(id)}>
            Añadir al carrito
        </button>
        <div>
            <a href="#" className="btn">Vista</a>
        </div>
        </div>
        </div>
    )
}