import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);
    // console.log(cart)

    const addToBag = product => {
        const newItems = [...items, product];
        // setCart(product)
        setItems(newItems);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='products-container'>
            <div className='products'>
                {
                    products.map(product => <Product key={product.id} product={product} addToBag={addToBag}></Product>)
                }
            </div>
            <div className='selected-item'>
                {
                    items.map(item => <ShoppingCart key={item.id} item={item}></ShoppingCart>)
                }
            </div>
        </div>
    );
};

export default Products;