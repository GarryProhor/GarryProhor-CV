import React from 'react';
import avatar1 from "../../../assets/images/avatar-1.png";
import iconQuote from "../../../assets/images/icon-quote.svg";
import {AiOutlineClose} from 'react-icons/ai'

const ModalTestimonial = ({openModal, setOpenModal}) => {
    return (
        <>
            <div  className={`modal-container ${openModal ? ' active' : ''}`} data-modal-container="">

                <div  className={`overlay ${openModal ? ' active' : ''}`} data-overlay=""></div>

                <section  className="testimonials-modal">

                    <button onClick={() => setOpenModal(false)} className="modal-close-btn" data-modal-close-btn="">
                        <AiOutlineClose />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={avatar1} alt="Garry" width="80"
                                 data-modal-img=""/>

                        </figure>
                        <img src={iconQuote} alt="quote icon" width="80"/>
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