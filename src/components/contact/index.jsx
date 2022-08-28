import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact" data-page="contact">

                <header>
                    <h2 className="h2 article-title">Контакты</h2>
                </header>

                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.5719957297274!2d31.028578610129735!3d52.45066760684753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4699528cf1b05%3A0xebf18087c9944393!2z0YPQuy4g0JPQvtC70L7QstCw0YbQutC-0LPQviAxMzQsINCT0L7QvNC10LvRjCAyNDYwNTM!5e0!3m2!1sru!2sby!4v1661626155236!5m2!1sru!2sby"
                            width="400" height="300"  loading="lazy"></iframe>
                    </figure>
                </section>

                <section className="contact-form">

                    <h3 className="h3 form-title">Форма для заполнения</h3>

                    <form action="src/components/contact/index.jsx" className="form" data-form="">

                        <div className="input-wrapper">
                            <input type="text" name="fullname" className="form-input" placeholder="Имя"
                                   required data-form-input=""/>

                            <input type="email" name="email" className="form-input" placeholder="Email адрес"/>
                        </div>

                        <textarea name="message" className="form-input" placeholder="Ваше Сообщение"></textarea>

                        <button className="form-btn" type="submit">
                            <ion-icon name="paper-plane"></ion-icon>
                            <span>Отправить сообщение</span>
                        </button>

                    </form>

                </section>

            </div>
        </>

    );
};

export default Contact;