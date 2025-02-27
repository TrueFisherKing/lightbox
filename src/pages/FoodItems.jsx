import { useState, useEffect } from 'react'
import Lightbox from '../components/lightbox/Lightbox';
import './FoodItems.css'

let showLightbox = false;

export default function FoodItems() {
    const [foodItems, setFoodItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [currentCategory, setCurrentCategory] = useState('All');
    useEffect(() => {
        // Fetch the data from the public directory
        fetch('/data/food-items.json')
            .then((response) => response.json())
            .then((data) => {
                setFoodItems(data.items);
            })
            .catch((error) => {
                console.error("Error fetching food items:", error);
            });
    }, [])

    const uniqueCategories = ["All", ...new Set(foodItems.map(item => item.category))]

    const categoryElements = uniqueCategories.map((category) => {
        return (
            <button
                onClick={() => setCurrentCategory(category)}
                key={category}
                className={category === currentCategory ? 'active' : ''}
            >
                {category}
            </button>
        )
    })


    function selectFoodItem(item) {
        showLightbox = true;
        setSelectedItem(item);
    }

    const foodItemsElements = foodItems
        .filter((item) => {
            return currentCategory === "All" ? item : item.category.includes(currentCategory);
        })
        .map((item) => {
            return (
                <section className={item.category.toLowerCase().replace(" ", "-")} key={item.id}>
                    <h3>{item.title}</h3>
                    <img onClick={() => selectFoodItem(item)} src={item.image} alt={item.title} />
                    <p className="description">{item.description}</p>
                    <p className='category'>{item.category}</p>
                </section>
            );
        });

    return (
        <>
            <div className="categories">

                {categoryElements}
            </div>
            <main className='food-items'>
                {foodItemsElements}
            </main>
            {showLightbox && (
                <Lightbox item={selectedItem} foodItem={setSelectedItem}>
                    {
                        (toggleBool) => {
                            showLightbox = toggleBool;
                        }
                    }
                </Lightbox>)}
        </>
    )
}