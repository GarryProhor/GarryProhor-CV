import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./navbar";
import About from "./about";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Contact from "./contact";


const Main = () => {
    return (
        <BrowserRouter>
            <div className="main-content">
                <Navbar/>
                <Routes>
                    <Route index element={<About/>} />
                    <Route path='resume' element={<Resume/>}/>
                    <Route path='portfolio' element={<Portfolio/>}/>
                    <Route path='blog' element={<Blog/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Main;