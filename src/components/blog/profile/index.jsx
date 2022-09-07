import React from 'react';
import './Profile.css'
import {CgProfile} from "react-icons/cg";
import {profiles} from "../../../assets/data";
import {Link} from 'react-router-dom';

const Profile = () => {
    return (
            <div className="dropdown">
                <button className="drop-btn"><CgProfile /></button>
                <div className="dropdown-content">
                    {
                        profiles.map(({title, path}) => <Link key={title} to={path}>{title}</Link>)
                    }
                </div>
            </div>
    );
};

export default Profile;