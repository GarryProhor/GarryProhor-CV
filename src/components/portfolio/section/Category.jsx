import React from 'react';
import {categories} from '../../../assets/data';
import {Link} from "react-router-dom";


const Category = ({value, onClickCategory}) => {

    return (
        <>
            <ul className="filter-list ">
                {categories.map(({title,  id}) => {
                    return ( <li key={id} className="filter-item">
                        <Link to=''
                              onClick={()=>onClickCategory(id)}
                              className={`filter-link ${value === id ? ' active' : ''}`}>
                            {title}
                        </Link>
                    </li>)
                })
                }
            </ul>
        </>
    );
};

export default Category;