import React from 'react';
import {contacts} from "../../assets/data";

const Contact = () => {
    return (
        <div>
            <div className="separator"></div>

            <ul className="contacts-list">

                {contacts.map(({icon, title, link, href}) =>(<li key={title} className="contact-item">

                    <div className="icon-box">
                        <ion-icon name="mail-outline">{icon}</ion-icon>
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">{title}</p>

                        {href === '' ? <div className="contact-link">{link}</div> : <a href={href} className="contact-link">{link}</a>}
                    </div>

                </li>))}


            </ul>
        </div>
    );
};

export default Contact;