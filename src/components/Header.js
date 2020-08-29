import React from 'react';
import logo from '../assets/img/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const nav = [
    { link: '/docs', name: 'Docs' },
    { link: '/about', name: 'About' },
    { link: '/contacts', name: 'Contacts' },
];

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <Link to="/">
                            <img src={logo} alt="Rick and Morty" />
                        </Link>
                    </div>

                    <div className="header-nav">
                        <ul>
                            {nav.map(({ link, name }) => (
                                <li key={name}>
                                    <NavLink to={link}>{name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
