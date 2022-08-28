import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">

            <ul className="navbar-list">
                <Link to='/'>
                    <li className="navbar-item">
                        <button className="navbar-link  active" data-nav-link="data-nav">Обо мне</button>
                    </li>
                </Link>


                <Link to='/resume'>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="data-nav">Резюме</button>
                    </li>
                </Link>


                <Link to='/portfolio'>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="data-nav">Портфолио</button>
                    </li>
                </Link>


                <Link to='/blog'>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="data-nav">Блог</button>
                    </li>
                </Link>


                <Link to='/contact'>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="data-nav">Контакты</button>
                    </li>
                </Link>

            </ul>

        </nav>
    );
};

export default Navbar;