import React from 'react';
import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";
import avatar4 from "../../assets/images/avatar-4.png";
import iconQuote from "../../assets/images/icon-quote.svg";
import logo1 from "../../assets/images/logo-1-color.png";
import logo2 from "../../assets/images/logo-2-color.png";
import logo3 from "../../assets/images/logo-3-color.png";
import logo4 from "../../assets/images/logo-4-color.png";
import logo5 from "../../assets/images/logo-5-color.png";
import logo6 from "../../assets/images/logo-6-color.png";
import './About.css';
import Header from "../Header";
import {doing} from "../../assets/data";
import Service from "./Service";

const About = () => {
    return (
        <article className="about  active" data-page="about">

            <Header title='Обо мне'/>

            <section className="about-text">
                <p>
                    Я фронтенд разработчик из Гомеля, Беларусь, занимаюсь веб-разработкой.

                    Мне нравится превращать сложные проблемы в простые, красивые и интуитивно понятные проекты.
                </p>

                <p>
                    Моя работа заключается в том, чтобы создать ваш веб-сайт таким образом, чтобы он был функциональным и удобным для пользователя, но в то же время
                    время привлекательным.

                </p>
            </section>


            {/*- service*/}


            <section className="service">

                <h3 className="h3 service-title">Что я делаю</h3>

                <ul className="service-list">
                    {doing.map(({icon, title, text}) => <Service key={title} icon={icon} title={title} text={text} />)}
                </ul>

            </section>


            {/*- testimonials*/}


            <section className="testimonials">

                <h3 className="h3 testimonials-title">Отзывы</h3>

                <ul className="testimonials-list has-scrollbar">

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">

                            <figure className="testimonials-avatar-box">
                                <img src={avatar1} alt="Daniel lewis" width="60"
                                     data-testimonials-avatar=""/>
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title="">Сергей Филимончик</h4>

                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Игоря наняли для создания фирменного стиля. Мы были очень довольны
                                    проделанной работой. У него есть
                                    большой опыт
                                    и он очень заботится о мнении клиентов.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">

                            <figure className="testimonials-avatar-box">
                                <img src={avatar2} alt="Jessica miller" width="60"
                                     data-testimonials-avatar=""/>
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title="">Ирина Грушник</h4>

                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Игоря наняли для создания фирменного стиля. Мы были очень довольны
                                    проделанной работой. У него есть
                                    большой опыт
                                    и он очень заботится о мнении клиентов.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">

                            <figure className="testimonials-avatar-box">
                                <img src={avatar3} alt="Emily evans" width="60"
                                     data-testimonials-avatar=""/>
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title="">Лера Левицкая</h4>

                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Игоря наняли для создания фирменного стиля. Мы были очень довольны
                                    проделанной работой. У него есть
                                    большой опыт
                                    и он очень заботится о мнении клиентов.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">

                            <figure className="testimonials-avatar-box">
                                <img src={avatar4} alt="Henry william" width="60"
                                     data-testimonials-avatar=""/>
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title="">Александр Высоконов</h4>

                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Игоря наняли для создания фирменного стиля. Мы были очень довольны
                                    проделанной работой. У него есть
                                    большой опыт
                                    и он очень заботится о мнении клиентов.
                                </p>
                            </div>

                        </div>
                    </li>

                </ul>

            </section>


            {/*- testimonials modal*/}


            <div className="modal-container" data-modal-container="">

                <div className="overlay" data-overlay=""></div>

                <section className="testimonials-modal">

                    <button className="modal-close-btn" data-modal-close-btn="">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={avatar1} alt="Daniel lewis" width="80"
                                 data-modal-img=""/>
                        </figure>

                        <img src={iconQuote} alt="quote icon"/>
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title" data-modal-title="">Сергей Филимончик</h4>

                        <time dateTime="2021-06-14">14 Августа, 2022</time>

                        <div data-modal-text="">
                            <p>
                                Игоря наняли для создания фирменного стиля. Мы были очень довольны
                                проделанной работой. У него есть большой опыт и он очень заботится о мнении клиентов.
                            </p>
                        </div>

                    </div>

                </section>

            </div>


            {/*- clients*/}


            <section className="clients">

                <h3 className="h3 clients-title">Клиенты</h3>

                <ul className="clients-list has-scrollbar">

                    <li className="clients-item">
                        <a href="src/components/about/index.jsx">
                            <img src={logo1} alt="client logo"/>
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="src/components/about/index.jsx">
                            <img src={logo2} alt="client logo"/>
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="src/components/about/index.jsx">
                            <img src={logo3} alt="client logo"/>
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="src/components/about/index.jsx">
                            <img src={logo4} alt="client logo"/>
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="src/components/about/index.jsx">
                            <img src={logo5} alt="client logo"/>
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="src/components/about/index.jsx">
                            <img src={logo6} alt="client logo"/>
                        </a>
                    </li>

                </ul>

            </section>

        </article>
    );
};

export default About;