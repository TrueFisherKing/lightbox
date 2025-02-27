import { useState, useEffect } from 'react';
import Categories from '../../components/categories/Categories';
import FoodItem from '../../components/fooditem/FoodItem';
import Lightbox from '../../components/lightbox/Lightbox';
import './FoodItems.css';

export default function FoodItems() {
    const [currentCategory, setCurrentCategory] = useState('All');
    const [foodItems, setFoodItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('/data/food-items.json')
            .then((response) => response.json())
            .then((data) => setFoodItems(data.items))
            .catch((error) => console.error("Error fetching food items:", error));
    }, []);

    const filteredFoodItems = foodItems.filter(item => 
        currentCategory === "All" || item.category.includes(currentCategory)
    );

    return (
        <>
            <div className="categories">
                <Categories
                    foodItems={foodItems}
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                />
            </div>
            <main className='food-items'>
                {filteredFoodItems.map(item => (
                    <FoodItem key={item.id} item={item} setSelectedItem={setSelectedItem} />
                ))}
            </main>
            {selectedItem && <Lightbox selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
        </>
    );
}
