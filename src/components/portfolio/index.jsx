import React from 'react';
import './Portfolio.css';
import Header from "../Header";
import Category from "./section/Category";
import Project from "./section/Project";
import Search from "./section/Search";

const Portfolio = () => {
    return (
        <div className="portfolio" data-page="portfolio">

            <Header title='Портфолио'/>

            <section className="projects">

                <div className='projects-search'>
                    <Category />
                    <Search />
                </div>

                <Project />

            </section>

        </div>
    );
};

export default Portfolio;