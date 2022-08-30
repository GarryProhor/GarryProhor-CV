import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css'
import {links} from "../../assets/data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {
                   links.map(({name, path}, index) => {
                       return (
                           <li key={index} className="navbar-item">
                               <NavLink  to={path} className={`navbar-link ${(isActive) => isActive ? ' active' : ''}`} data-nav-link="data-nav">{name}</NavLink>
                           </li>
                       )
                   })
                }
            </ul>
        </nav>
    );
};

export default Navbar;