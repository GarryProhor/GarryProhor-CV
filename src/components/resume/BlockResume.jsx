import React from 'react';

const BlockResume = ({title, logo, items}) => {
    return (
        <>
            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        {logo}
                    </div>

                    <h3 className="h3">{title}</h3>
                </div>

                <ol className="timeline-list">

                    {items.map(({name, period, text}) => (<li key={name} className="timeline-item">

                        <h4 className="h4 timeline-item-title">{name}</h4>

                        <span>{period}</span>

                        <p className="timeline-text">
                            {text}
                        </p>

                    </li>))}
                </ol>
            </section>
        </>
    );
};

export default BlockResume;