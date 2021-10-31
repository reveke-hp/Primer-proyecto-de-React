import React from "react";
import { Link } from "react-router-dom";
import "./inicio.css"
import { BoxIconElement } from "boxicons";

export const Inicio =() => {
    return(
        <div className="inicio">
            <Link to="/">
                <h1 className="title">Inicio</h1>
            </Link>
            <Link to="/Productos">
                <h1 className="title">Productos</h1>
            </Link>
        </div>

    )
}