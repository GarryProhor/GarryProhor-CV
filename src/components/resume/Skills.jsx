import React from 'react';
import {progress} from "../../assets/data";

const Skills = () => {
    return (
        <>
            <section className="skill">

                <h3 className="h3 skills-title">Мои навыки</h3>

                <ul className="skills-list content-card">

                    {progress.map(({title, percentage}) => (<li key={title} className="skills-item" style={{width: `${percentage}%`}}>

                        <div className="title-wrapper">
                            <h5 className="h5">{title}</h5>
                            <data value={`${percentage}`}>{percentage}%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill"></div>
                        </div>

                    </li>))}
                </ul>

            </section>
        </>
    );
};

export default Skills;