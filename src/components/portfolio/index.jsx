import React from 'react';
import './Portfolio.css';
import Header from "../Header";
import Category from "./section/Category";
import Project from "./section/Project";

const Portfolio = () => {
    return (
        <div className="portfolio" data-page="portfolio">

            <Header title='Портфолио'/>

            <section className="projects">

                <Category />

                <Project />

            </section>

        </div>
    );
};

export default Portfolio;