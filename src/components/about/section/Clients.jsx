import React from 'react';
import {clients} from "../../../assets/data";
import Client from "../Client";


const Clients = () => {
    return (
        <>
            <section className="clients">

                <h3 className="h3 clients-title">Клиенты</h3>

                <ul className="clients-list has-scrollbar">
                    {
                        clients.map(({logo}, index) => <Client key={index}  logo={logo}/>)
                    }
                </ul>

            </section>
        </>
    );
};

export default Clients;