import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';
import './Header.css'

// font-awesome file import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const cart = props.cart;
    console.log(cart);
    return (
        <div className="header-menu">
            <div className="header-img">
                <img src={logo} alt="" />
            </div>
            <div className="nav">
                <a href="/home">Home</a>
                <a href="/Profile">Profile</a>

                <a href="/Developer">Developer</a>
                <div className="user">
                    <FontAwesomeIcon icon={faUsers} />

                </div>
            </div>

        </div>
    );
};

export default Header;