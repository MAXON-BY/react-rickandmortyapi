import React from 'react';
import logo from "../assets/img/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <a href="/">
                            <img src={logo} alt="Rick and Morty"/>
                        </a>
                    </div>

                    <div className="header-nav">
                        <ul>
                            <li><a href="/">Docs</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;