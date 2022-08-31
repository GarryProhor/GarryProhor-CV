import React from 'react';

const Testimonial = ({avatar, name, text, setOpenModal}) => {
    return (
        <>
            <li onClick={() => setOpenModal(true)} className="testimonials-item">
                <div  className="content-card" data-testimonials-item="">

                    <figure className="testimonials-avatar-box">
                        <img src={avatar} alt="Daniel lewis" width="60"
                             data-testimonials-avatar=""/>
                    </figure>

                    <h4 className="h4 testimonials-item-title" data-testimonials-title="">{name}</h4>

                    <div className="testimonials-text" data-testimonials-text="">
                        <p>
                            {text}
                        </p>
                    </div>

                </div>
            </li>
        </>
    );
};

export default Testimonial;