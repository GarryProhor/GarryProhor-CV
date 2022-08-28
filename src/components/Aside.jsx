import React from 'react';
import myAvatar from '../assets/images/my-avatar.png';

const Aside = () => {
    return (
        <>
            <aside className="sidebar" data-sidebar="slide">

                <div className="sidebar-info">

                    <figure className="avatar-box">
                        <img src={myAvatar} alt="Garry Prohor" width="80"/>
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Garry Prohor">Игорь Прохорченко</h1>

                        <p className="title">Web developer</p>
                        <p className="title">Java developer</p>
                    </div>

                    <button className="info_more-btn" data-sidebar-btn="slide">
                        <span>Показать контакты</span>

                        <ion-icon name="chevron-down"></ion-icon>
                    </button>

                </div>

                <div className="sidebar-info_more">

                    <div className="separator"></div>

                    <ul className="contacts-list">

                        <li className="contact-item">

                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Email</p>

                                <a href="mailto:proxor-007@mail.ru" className="contact-link">proxor-007@mail.ru</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>

                                <a href="tel:+375296820360" className="contact-link">+375 (29) 6-820-360</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <ion-icon name="calendar-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>

                                <time dateTime="1986-06-23">Февраль 7, 1986</time>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Location</p>

                                <address>Гомель, Беларусь</address>
                            </div>

                        </li>

                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>

            </aside>
        </>


    );
};

export default Aside;