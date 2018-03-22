import React from 'react';
import reacttransparent from '../../img/react-transparent.png';


const Header = () => {
    return (
        <header>
            <div className="jumbotron jumbotron-fluid bg-info text-white text-center">
                <div className="container">
                    <img width="300" src={reacttransparent} />
                    <h1 className="display-4">React JS</h1>
                    <p className="lead">Capital Tech Framework UFC</p>
                </div>
            </div>
        </header>
    );
};


export default Header;
