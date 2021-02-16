import React from 'react';
import {NavLink} from 'react-router-dom'
import './Menu.scss'


export function Menu(){
    return(
        <nav className="navMenu">
           
           
            <NavLink className="navLink" to="/">HOME</NavLink>
            <NavLink className="navLink" to="/amiibos">AMIIBOS</NavLink>
            <NavLink className="navLink" to="/games">GAMES</NavLink>
            <NavLink className="navLink" to="/contact">CONTACT</NavLink>

            

        </nav>
    )
}