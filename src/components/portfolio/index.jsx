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

const Portfolio = () => {
    return (
        <div className="portfolio" data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Портфолио</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">

                    <li className="filter-item">
                        <button className="active" data-filter-btn="">All</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="">Веб дизайн</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="">Приложения</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="">Веь разработка</button>
                    </li>

                </ul>

                <div className="filter-select-box">

                    <button className="filter-select" data-select="">

                        <div className="select-value" data-selecct-value="">Выбор категории</div>

                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>

                    </button>

                    <ul className="select-list">

                        <li className="select-item">
                            <button data-select-item="">Все</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item="">Веб дизайн</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item="">Приложения</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item="">Веб разработка</button>
                        </li>

                    </ul>

                </div>

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