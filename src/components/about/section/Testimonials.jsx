import React from 'react';
import {testimonials} from "../../../assets/data";
import Testimonial from "../Testimonial";

const Testimonials = ({setOpenModal}) => {
    return (
        <>
            <section className="testimonials">

                <h3 className="h3 testimonials-title">Отзывы</h3>

                <ul className="testimonials-list has-scrollbar">
                    {
                        testimonials.map(({avatar, name, text, id}) => <Testimonial key={id} id={id}  avatar={avatar} name={name} text={text} setOpenModal={setOpenModal}/>)
                    }
                </ul>

            </section>
        </>
    );
};

export default Testimonials;