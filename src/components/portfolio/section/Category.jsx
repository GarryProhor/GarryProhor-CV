import React from 'react';
import {categories} from '../../../assets/data';
import {Link} from "react-router-dom";


const Category = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index) =>{
        setActiveIndex(index)
    }
    return (
        <>
            <ul className="filter-list ">
                {categories.map(({title, path, id}) => {
                    return ( <li key={id} className="filter-item">
                        <Link to={`portfolio/${path}`}
                              onClick={()=>onClickCategory(id)}
                              className={`filter-link ${activeIndex === id ? ' active' : ''}`}>
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