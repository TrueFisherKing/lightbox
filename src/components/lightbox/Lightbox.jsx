import React from 'react'
import './Lightbox.css'

function closeLightbox(toggleBool, foodItem){
    toggleBool(false);
    foodItem({});
}
export default function Lightbox({children : toggleBool, item, foodItem}) {
  return (
    <div className='lightbox' onClick={()=>closeLightbox(toggleBool, foodItem)}>
        <img src={item.image} alt={item.title} />
    </div>
  )
}
