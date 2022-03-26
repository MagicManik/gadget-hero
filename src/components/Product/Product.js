import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
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
                <button onClick={() => addToBag(product)} className='product-button'>Add to Bag <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;