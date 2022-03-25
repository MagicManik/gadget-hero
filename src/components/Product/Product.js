import React from 'react';
import './Product.css'

const Product = ({ product, addToBag }) => {
    const { img, name, price, brand } = product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price : ${price}</p>
                    <h4>Brand: <span className='brand-name'>{brand}</span></h4>
                </div>
            </div>
            <div>
                <button onClick={() => addToBag(product)} className='product-button'>Add to Bag</button>
            </div>
        </div>
    );
};

export default Product;