import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Paginas from "./components/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./components/Carrito/Carrito";

function App(){
  return(
    <DataProvider>
    <div className="App">
      <Router>
      <Header/>
      <Carrito/>
      <Paginas/>
      </Router>
    </div>
    </DataProvider>
  )
}


export default App;








/*
import { Fragment } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";


function App() {

//Listado de productos con un state
  const [productos, guardarProductos] = useState([
    {id:1, articulo:"Konoha Genin - Campera",precio:39.99},
    {id:2, articulo:"Akatsuki Member - Campera",precio:35.99},
    {id:3, articulo:"Sensei - Remera",precio:11.99},
    {id:4, articulo:"Konoha - Remera",precio:16.99},
  ]);
  
//State para changuito
  const [changuito, agregarProducto] = useState([]);

  return (
    <div className="App">
      <Fragment>
      <Header/>
      <h1>Articulos de Naruto - Compra Online</h1>
      {productos.map(producto =>
        <Producto
          key = {producto.id}
          producto = {producto}
          productos = {productos}
          changuito = {changuito}
          agregarProducto = {agregarProducto}
       
        />
        )}

      <Changuito
        changuito = {changuito}

      />

  
  
      <Footer anio= {"2021"} />
      </Fragment>
    </div>
  );
}

export default App;

*/