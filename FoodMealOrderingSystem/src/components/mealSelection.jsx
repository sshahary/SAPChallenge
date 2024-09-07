import React, { useState, useEffect } from 'react';

const MealSelection = ({ onSelect }) => {
    const [mealOptions, setMealOptions] = useState([]);

    useEffect(() => {
        // Fetch meal options from the server
        // You can use Axios or fetch here
        setMealOptions(['Vegetarian', 'Non-Vegetarian', 'Vegan']);
    }, []);

    const handleChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <div>
            <h2>Select Meal</h2>
            <select onChange={handleChange}>
                {mealOptions.map((meal, index) => (
                    <option key={index} value={meal}>{meal}</option>
                ))}
            </select>
        </div>
    );
};

export default MealSelection;
