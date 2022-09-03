import React from 'react';
import './About.css';
import Header from "../Header";
import AboutText from "./section/AboutText";
import Services from "./section/Services";
import Testimonials from "./section/Testimonials";
import ModalTestimonial from "./section/ModalTestimonial";
import Clients from "./section/Clients";

const About = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [testimonial, setTestimonial] = React.useState([]);

    return (
        <article className="about  active" data-page="about">

            <Header title='Обо мне'/>

            <AboutText />

            <Services />

            {!openModal ?
                <Testimonials setTestimonial={setTestimonial} setOpenModal={setOpenModal}/>
                :
                <ModalTestimonial  testimonial={testimonial} openModal={openModal} setOpenModal={setOpenModal}/>

            }

            <Clients />


        </article>
    );
};

export default About;