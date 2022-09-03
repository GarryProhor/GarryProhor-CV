import React from 'react';
import {Link} from "react-router-dom";

import {FaRegEye} from 'react-icons/fa'

const Project = ({ project, title, category}) => {
    return (
        <>
            <ul className="project-list">

                <li  className="project-item  active" data-filter-item="" data-category="web development">
                    <Link to='/'>

                        <div className="project-img">
                            <div className="project-item-icon-box">
                               <FaRegEye />
                            </div>

                            <img src={project} alt="finance" loading="lazy"/>
                        </div>

                        <h3 className="project-title">{title}</h3>

                        <p className="project-category">{category}</p>

                    </Link>
                </li>

            </ul>
        </>
    );
};

export default Project;