import React from 'react';
import './Form.css'
import Registration from "./Registration";
import Login from "./Login";

const Form = () => {
    return (
        <div className="main">
            {/*<Login />*/}
            <Registration/>
        </div>
    );
};

export default Form;