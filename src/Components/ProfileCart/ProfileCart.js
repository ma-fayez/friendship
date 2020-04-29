import React from 'react';
import './ProfileCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


const ProfileCart = (props) => {
    const Cart = props.cart;

    let profile = "";
    for (let i = 0; i < Cart.length; i++) {
        const user = Cart[i];
        profile = { name: user.name, img: user.img, username: user.username, email: user.email, phone: user.phone, street: user.address.street };
    }

    return (
        <div className="Profile-Cart">
            <div className="count">
                <h2><FontAwesomeIcon icon={faUsers} /> Total Added Friend : {Cart.length}</h2>
            </div>
            <div className="profile">
                <h2 className="last-added">Last Added Friend</h2>
                <img src={profile.img} alt="" />
                <h2> {profile.name} </h2>
                <p>Username : {profile.username} </p>
                <p>Email : {profile.email} </p>
                <p>Phone : {profile.phone} </p>
                <p>Address : {profile.street} </p>
            </div>
        </div>
    );
};

export default ProfileCart;