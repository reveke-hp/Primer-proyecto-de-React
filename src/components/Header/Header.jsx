import React from 'react';
import { Fragment } from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';
import { useContext } from 'react';
import { BoxIconElement } from "boxicons";


const Header = () => {
    const value = useContext(DataContext)
    const[menu, setMenu] = value.menu
    const[carrito] = value.carrito 

    console.log(menu);

    const toogleMenu = () =>{
        setMenu(!menu);
    }

    return ( 
        <header>
            <div class= "menu">
                <box-icon name="menu">
                </box-icon>
            </div>
            <Link to="#">
                <div className="Logo">
                    NARUTO STORE
                </div>    
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/Productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div> 
        </header>   
     );
}
 
export default Header;