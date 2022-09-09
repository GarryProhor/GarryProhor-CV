import React from 'react';
import './Portfolio.css';
import Header from "../Header";
import Category from "./section/Category";
import Project from "./section/Project";
import Search from "./section/Search";
import Pagination from "../pagination";
import SkeletonPortfolio from "../skeletons/SkeletonPortfolio";


//https://62da700d9eedb699636e2d90.mockapi.io/projects
const Portfolio = () => {
    const [categoryId, setCategoryId] = React.useState(0);
    const [projects, setProjects] =React.useState([]);
    const [search, setSearch] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(true);


    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searchValue = search ? `&search=${search}` : '';
    React.useEffect(() =>{
        setIsLoading(true);
        fetch(`https://62da700d9eedb699636e2d90.mockapi.io/projects?page=${currentPage}&limit=4&${category}${searchValue}`)
            .then((response) => response.json())
            .then((items)=>{
                setProjects(items);
                setIsLoading(false);
        });
    }, [categoryId, search, currentPage]);
    return (
        <div className="portfolio" data-page="portfolio">

            <Header title='Портфолио'/>

            <section className="projects">

                <div className='projects-search'>
                    <Category value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                    <Search search={search} setSearch={setSearch}/>
                </div>

                <ul className="project-list">
                    {isLoading ?
                        [...new Array(4)].map((_, index) => <SkeletonPortfolio key={index}/>)
                        : projects.map(obj => (<Project key={obj.id} {...obj}/>))}
                </ul>

                <Pagination currentPage={currentPage} onChangePage={(page)=>setCurrentPage(page)}/>
            </section>

        </div>
    );
};

export default Portfolio;