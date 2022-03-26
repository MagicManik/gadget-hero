import React from 'react';
import './SelectedItem.css'

const SelectedItem = ({ item }) => {
    const { img, name } = item;

    return (
        <div>
            <div className='selecteditem-container'>
                <img width={50} src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default SelectedItem;