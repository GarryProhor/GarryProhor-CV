import React from 'react';
import './Resume.css'
import Header from "../Header";
import {FaLaptopCode} from 'react-icons/fa'
import {GiSpellBook} from "react-icons/gi";
import BlockResume from "./BlockResume";
import {education, experience} from "../../assets/data";
import Skills from "./Skills";

const Resume = () => {
    return (
        <div className="resume" data-page="resume">

            <Header title='Резюме'/>

            <BlockResume title='Образование' logo={<GiSpellBook />} items={education}/>

            <BlockResume title='Опыт' logo={<FaLaptopCode />} items={experience}/>

            <Skills />

        </div>
    );
};

export default Resume;