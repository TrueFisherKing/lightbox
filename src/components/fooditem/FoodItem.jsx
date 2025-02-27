import React from 'react';

export default function FoodItem({ item, setSelectedItem }) {
    return (
        <section className={item.category.toLowerCase().replace(/\s+/g, "-")}>
            <h3>{item.title}</h3>
            <img onClick={() => setSelectedItem(item)} src={item.image} alt={item.title} />
            <p className="description">{item.description}</p>
            <p className='category'>{item.category}</p>
        </section>
    );
}
