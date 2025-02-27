import React from 'react'
import "./Categories.css"
export default function Categories({ foodItems, currentCategory, setCurrentCategory }) {
    const uniqueCategories = ["All", ...new Set(foodItems.map(item => item.category))]

    return (

        <div className="category-buttons">
            {uniqueCategories.map((category) => (
                <button
                    onClick={() => setCurrentCategory(category)}
                    key={category}
                    className={category === currentCategory ? 'active' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
    )

}
