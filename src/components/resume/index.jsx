import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <div className="resume" data-page="resume">

            <header>
                <h2 className="h2 article-title">Резюме</h2>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>

                    <h3 className="h3">Образование</h3>
                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Белорусский национальный технический университет</h4>

                        <span>2004 — 2009</span>

                        <p className="timeline-text">
                            Квалификация - инженер.
                        </p>

                    </li>

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">ИТ-Класс</h4>

                        <span>2020-2021</span>

                        <p className="timeline-text">
                            Основы Java.
                        </p>

                    </li>

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">INTERVALE</h4>

                        <span>2021 — 2022</span>

                        <p className="timeline-text">
                            Java Spring
                        </p>

                    </li>

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Cамостоятельное изучение</h4>

                        <span>2021 — настоящее время</span>

                        <p className="timeline-text">
                             HTML, CSS, JavaScript/ReactJS
                        </p>

                    </li>
                </ol>

            </section>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>

                    <h3 className="h3">Опыт</h3>
                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Java</h4>

                        <span>декабрь 2021 — март 2022</span>

                        <p className="timeline-text">
                           Выполнил 2 проекта по разработке сервиса поиска, хранения и продажи книг.
                           Реализован командный проект.
                        </p>

                    </li>

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Фрилансер</h4>

                        <span>2022 — настоящее время</span>

                        <p className="timeline-text">
                            Выполнил несколько пет проектов
                        </p>

                    </li>

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Фрилансер</h4>

                        <span>2022 — настоящее время</span>

                        <p className="timeline-text">
                            Выполнил 4 заказа на фрилансе
                        </p>

                    </li>

                </ol>

            </section>

            <section className="skill">

                <h3 className="h3 skills-title">Мои навыки</h3>

                <ul className="skills-list content-card">

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Java</h5>
                            <data value="80">80%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" ></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Spring</h5>
                            <data value="70">70%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" ></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">HTML/CSS</h5>
                            <data value="90">90%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" ></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">ReactJS</h5>
                            <data value="50">70%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" ></div>
                        </div>

                    </li>

                </ul>

            </section>

        </div>
    );
};

export default Resume;