import React from 'react';
import Info from "./aside/Info";
import Contact from "./aside/Contact";
import Socials from "./aside/Socials";

const Aside = () => {
    return (
        <>
            <aside className="sidebar" data-sidebar="slide">

                <Info />

                <div className="sidebar-info_more">
                    <Contact />
                    <Socials />
                </div>
            </aside>
        </>


    );
};

export default Aside;