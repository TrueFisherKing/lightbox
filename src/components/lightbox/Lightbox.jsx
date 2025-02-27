import React from 'react';
import './Lightbox.css';

export default function Lightbox({ selectedItem, setSelectedItem }) {

    return (
        <div className='lightbox' onClick={()=>setSelectedItem(null)}>
            <img src={selectedItem.image} alt={selectedItem.title} />
        </div>
    )
}
