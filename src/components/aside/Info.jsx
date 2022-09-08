import React from 'react';
import myAvatar from "../../assets/images/my-avatar.png";
import {titles} from "../../assets/data";

const Info = () => {
    return (
            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img className='avatar' src={myAvatar} alt="Garry Prohor"/>
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Garry Prohor">Игорь Прохорченко</h1>
                    {
                        titles.map(({title}) => <p key={title} className="title">{title}</p>)
                    }
                </div>

                <button className="info_more-btn" data-sidebar-btn="slide">
                    <span>Показать контакты</span>

                    <ion-icon name="chevron-down"></ion-icon>
                </button>

            </div>

    );
};

export default Info;