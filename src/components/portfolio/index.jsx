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

    React.useEffect(() =>{
        fetch('https://62da700d9eedb699636e2d90.mockapi.io/projects')
            .then((response) => response.json())
            .then((items)=>{setProjects(items);
        });
    }, []);
    return (
        <div className="portfolio" data-page="portfolio">

            <Header title='Портфолио'/>

            <section className="projects">

                <div className='projects-search'>
                    <Category value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                    <Search />
                </div>

                {projects.map(obj => (<Project key={obj.id} {...obj}/>))}

            </section>

        </div>
    );
};

export default Portfolio;