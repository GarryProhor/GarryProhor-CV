import React from 'react';
import Header from "../Header";
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="main__not-found">

                <Header title='Ошибка'/>

                <section className="not-found">
                    <p>Произошла ошибка.<br/>
                    Такой странищы не существует.</p>
                </section>


            </div>
        </>
    );
};

export default NotFound;