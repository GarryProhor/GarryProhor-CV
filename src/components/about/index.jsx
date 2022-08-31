import React from 'react';
import './About.css';
import Header from "../Header";
import AboutText from "./section/AboutText";
import Services from "./section/Services";
import Testimonials from "./section/Testimonials";
import ModalTestimonial from "./section/ModalTestimonial";
import Clients from "./section/Clients";

const About = () => {
    return (
        <article className="about  active" data-page="about">

            <Header title='Обо мне'/>

            <AboutText />

            <Services />

            <Testimonials />

            {/*<ModalTestimonial />*/}

            <Clients />


        </article>
    );
};

export default About;