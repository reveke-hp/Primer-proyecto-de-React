import React from "react";
import { Switch,Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import ProductosLista from "./Productos/Producto";


export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/Productos" exact component={ProductosLista} />

            </Switch>
        </section>

    )
}

export default Paginas;

