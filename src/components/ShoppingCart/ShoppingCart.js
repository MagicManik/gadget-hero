import React from 'react';
import './ShoppingCart.css'

const ShoppingCart = ({ item }) => {
    const { img, name } = item;
    console.log(img)

    return (
        <div className='shopping-cart'>
            <img width={50} src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default ShoppingCart;