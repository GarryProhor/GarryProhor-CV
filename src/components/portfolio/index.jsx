import React from 'react';
import './Portfolio.css';
import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.png";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.png";
import project5 from "../../assets/images/project-5.png";
import project6 from "../../assets/images/project-6.png";
import project7 from "../../assets/images/project-7.png";
import project8 from "../../assets/images/project-8.jpg";
import project9 from "../../assets/images/project-9.png";
import Header from "../Header";
import Category from "./section/Category";

const Portfolio = () => {
    return (
        <div className="portfolio" data-page="portfolio">

            <Header title='Портфолио'/>

            <section className="projects">

                <Category />

                <ul className="project-list">

                    <li className="project-item  active" data-filter-item="" data-category="web development">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project1} alt="finance" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Финансы</h3>

                            <p className="project-category">Веб разработка</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="web development">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project2} alt="orizon" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Оризон</h3>

                            <p className="project-category">Веб разработка</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="web design">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project3} alt="fundo" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Фундо</h3>

                            <p className="project-category">Веб дизайн</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="applications">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project4} alt="brawlhalla" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Brawlhalla</h3>

                            <p className="project-category">Приложение</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="web design">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project5} alt="dsm." loading="lazy"/>
                            </figure>

                            <h3 className="project-title">DSM.</h3>

                            <p className="project-category">Веб дизайн</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="web design">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project6} alt="metaspark" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">MetaSpark</h3>

                            <p className="project-category">Веб дизайн</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="web development">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project7} alt="summary" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Summary</h3>

                            <p className="project-category">Веб разработка</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="applications">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project8} alt="task manager" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Task Manager</h3>

                            <p className="project-category">Приложение</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item="" data-category="web development">
                        <a href="src/components/portfolio/index.jsx">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={project9} alt="arrival" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Arrival</h3>

                            <p className="project-category">Веб разработка</p>

                        </a>
                    </li>

                </ul>

            </section>

        </div>
    );
};

export default Portfolio;