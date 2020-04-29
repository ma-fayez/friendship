import React, { useState } from 'react';
import FakeData from '../../FakeData'
import './Container.css';
import UserData from '../UserData/UserData'
import ProfileCart from '../ProfileCart/ProfileCart'
// import Header from '../Header/Header';


const Container = () => {

    const first15 = FakeData.slice(0, 15);
    const [users, setusers] = useState(first15);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (user) => {
        console.log("Users added", user);
        const newCart = [...cart, user];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="content-info">
                <marquee behavior="" direction="">
                    Welcome To Friendship.com
               </marquee>
                {
                    users.map(pd => <UserData handleAddProduct={handleAddProduct} user={pd}></UserData>)
                }
            </div>
            <div className="profile-cart">

                <ProfileCart cart={cart}></ProfileCart>

            </div>

        </div>
    );
};

export default Container;