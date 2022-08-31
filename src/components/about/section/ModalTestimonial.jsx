import React from 'react';
import avatar1 from "../../../assets/images/avatar-1.png";
import iconQuote from "../../../assets/images/icon-quote.svg";

const ModalTestimonial = () => {
    return (
        <>
            <div className="modal-container" data-modal-container="">

                <div className="overlay" data-overlay=""></div>

                <section className="testimonials-modal">

                    <button className="modal-close-btn" data-modal-close-btn="">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={avatar1} alt="Daniel lewis" width="80"
                                 data-modal-img=""/>
                        </figure>

                        <img src={iconQuote} alt="quote icon"/>
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title" data-modal-title="">Сергей Филимончик</h4>

                        <time dateTime="2021-06-14">14 Августа, 2022</time>

                        <div data-modal-text="">
                            <p>
                                Игоря наняли для создания фирменного стиля. Мы были очень довольны
                                проделанной работой. У него есть большой опыт и он очень заботится о мнении клиентов.
                            </p>
                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

export default ModalTestimonial;