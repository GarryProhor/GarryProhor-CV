import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {links} from "../../assets/data";

const Navbar = () => {
    return (
        <nav className="navbar">

            <ul className="navbar-list">
                {
                   links.map(({name, path}, index) => {
                       return (
                           <Link key={index} to={path}>
                               <li className="navbar-item">
                                   <button className="navbar-link  active" data-nav-link="data-nav">{name}</button>
                               </li>
                           </Link>
                       )
                   })
                }



                {/*<Link to='/resume'>*/}
                {/*    <li className="navbar-item">*/}
                {/*        <button className="navbar-link" data-nav-link="data-nav">Резюме</button>*/}
                {/*    </li>*/}
                {/*</Link>*/}


                {/*<Link to='/portfolio'>*/}
                {/*    <li className="navbar-item">*/}
                {/*        <button className="navbar-link" data-nav-link="data-nav">Портфолио</button>*/}
                {/*    </li>*/}
                {/*</Link>*/}


                {/*<Link to='/blog'>*/}
                {/*    <li className="navbar-item">*/}
                {/*        <button className="navbar-link" data-nav-link="data-nav">Блог</button>*/}
                {/*    </li>*/}
                {/*</Link>*/}


                {/*<Link to='/contact'>*/}
                {/*    <li className="navbar-item">*/}
                {/*        <button className="navbar-link" data-nav-link="data-nav">Контакты</button>*/}
                {/*    </li>*/}
                {/*</Link>*/}

            </ul>

        </nav>
    );
};

export default Navbar;