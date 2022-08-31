import React from 'react';

const Client = ({logo}) => {
    return (
        <>
            <li className="clients-item">
                <a href="src/components/about/index.jsx">
                    <img src={logo} alt="client logo"/>
                </a>
            </li>
        </>
    );
};

export default Client;