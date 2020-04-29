import React from 'react';
import './UserData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const UserData = (props) => {

       // console.log(props)

       const {name, username, img, email, phone, address} = props.user;

       return (
           <div className="user-content">
              
               <div className="user-img">
                  <img src={img} alt=""/>
               </div>
               <div className="user-info">
               <h2 className="product-name"> {name} </h2>
                   <p>User-Name : {username}</p>
                   <p>Phone : {phone} </p>
                   <p>Email : {email}</p>
                   <p> Address : {address.street}, {address.city} </p>
                   <button className="add-button" onClick={() => props.handleAddProduct(props.user)}> <FontAwesomeIcon icon={faUser} /> Add To Friend List</button>
               </div>
                   
           </div>
    );
};

export default UserData;