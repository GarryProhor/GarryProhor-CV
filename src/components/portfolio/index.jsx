import React from 'react';
import './Portfolio.css';
import Header from "../Header";
import Category from "./section/Category";
import Project from "./section/Project";
import Search from "./section/Search";


//https://62da700d9eedb699636e2d90.mockapi.io/projects
const Portfolio = () => {
    const [categoryId, setCategoryId] = React.useState(0);
    const [projects, setProjects] =React.useState([]);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    React.useEffect(() =>{
        fetch(`https://62da700d9eedb699636e2d90.mockapi.io/projects?${category}`)
            .then((response) => response.json())
            .then((items)=>{setProjects(items);
        });
    }, [categoryId]);
    return (
        <div className="portfolio" data-page="portfolio">

            <Header title='Портфолио'/>

            <section className="projects">

                <div className='projects-search'>
                    <Category value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                    <Search />
                </div>

                <ul className="project-list">
                    {projects.map(obj => (<Project key={obj.id} {...obj}/>))}
                </ul>

            </section>

        </div>
    );
};

export default Portfolio;