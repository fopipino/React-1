import React from "react";
import { CartWidget } from "../CartWidget";

export const NavBar = ({tituloindex}) => {
    return (
        <>

        <li class="active"><a href="index.html">{tituloindex}</a></li>
        <li><a href="#">Quienes Somos</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>

        < CartWidget />

        </>
    )
    
}