import React from 'react';
import { NavLink, Link } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>Header Component</h3>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                {/* <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink> */}
                <NavLink to={'/mobiles'}>Mobiles</NavLink>
                <NavLink to={'/laptops'}>Laptops</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/users2'}>Users2</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;