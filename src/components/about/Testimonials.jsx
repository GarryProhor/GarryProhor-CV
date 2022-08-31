import React from 'react';
import avatar1 from "../../assets/images/avatar-1.png";

const Testimonials = ({avatar, name, text}) => {
    return (
        <>
            <li className="testimonials-item">
                <div className="content-card" data-testimonials-item="">

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

export default Testimonials;