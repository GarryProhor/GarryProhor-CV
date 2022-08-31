import React from 'react';
import {doing} from "../../../assets/data";
import Service from "../Service";

const Services = () => {
    return (
        <>
            <section className="service">

                <h3 className="h3 service-title">Что я делаю</h3>

                <ul className="service-list">
                    {doing.map(({icon, title, text}) => <Service key={title} icon={icon} title={title} text={text} />)}
                </ul>

            </section>
        </>
    );
};

export default Services;