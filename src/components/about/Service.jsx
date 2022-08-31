import React from 'react';

const Service = ({icon, title, text}) => {
    return (
        <>
            <li className="service-item">

                <div className="service-icon-box">
                    <img src={icon} alt="design icon"
                         width="40"/>
                </div>

                <div className="service-content-box">
                    <h4 className="h4 service-item-title">{title}</h4>

                    <p className="service-item-text">
                        {text}
                    </p>
                </div>

            </li>
        </>
    );
};

export default Service;