import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [chooseOne, setChooseOne] = useState([]);

    const addToBag = product => {
        const newItems = [...items, product];
        setItems(newItems);
    }

    const emptyItem = () => {
        const emptyItem = []
        setItems(emptyItem)
    }

    const randomSelector = selectedItems => {
        const random = Math.floor(Math.random() * 4);
        const giveMeOne = selectedItems[random];
        if (giveMeOne) {
            setChooseOne(giveMeOne);
        }

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
                    items.map(item => <SelectedItem key={item.id} item={item}></SelectedItem>)
                }
                <div className='selected-one'>
                    <img width={100} src={chooseOne.img} alt="" />
                    <h3>{chooseOne.name}</h3>
                    <div>
                        <p>{chooseOne.message}</p>
                    </div>
                </div>

                <div className='selected-button-container'>

                    <button className='choose-button' onClick={() => randomSelector(items)}>Choose For Me</button>

                    <button className='choose-again-button' onClick={emptyItem}>Choose Again</button>

                </div>
            </div>
        </div>
    );
};

export default Products;