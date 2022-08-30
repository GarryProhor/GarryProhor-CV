import React from 'react';
import {socials} from "../assets/data";

const Socials = () => {
    return (
        <div>
            <div className="separator"></div>

            <ul className="social-list">

                {socials.map(({icon, name, href}) =>(<li key={name} className="social-item">
                    <a href={href} className="social-link">
                        <ion-icon name="logo-facebook">{icon}</ion-icon>
                    </a>
                </li>))}

            </ul>
        </div>
    );
};

export default Socials;