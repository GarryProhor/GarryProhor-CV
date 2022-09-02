import React from 'react';
import {Link} from "react-router-dom";
import {projects} from "../../../assets/data";
import {FaRegEye} from 'react-icons/fa'

const Project = () => {
    return (
        <>
            <ul className="project-list">

                {projects.map(({id, project, title, category}) => (<li key={id} className="project-item  active" data-filter-item="" data-category="web development">
                    <Link to='/'>

                        <figure className="project-img">
                            <div className="project-item-icon-box">
                               <FaRegEye />
                            </div>

                            <img src={project} alt="finance" loading="lazy"/>
                        </figure>

                        <h3 className="project-title">{title}</h3>

                        <p className="project-category">{category}</p>

                    </Link>
                </li>))}

            </ul>
        </>
    );
};

export default Project;