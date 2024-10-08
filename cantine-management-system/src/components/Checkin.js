import React, { useState } from 'react';
import MealSelection from './MealSelection';
import TimeSlot from './TimeSlot';

const Checkin = () => {
    const [meal, setMeal] = useState(null);
    const [timeSlot, setTimeSlot] = useState(null);

    const handleMealSelection = (selectedMeal) => {
        setMeal(selectedMeal);
    };

    const handleTimeSlotSelection = (selectedTimeSlot) => {
        setTimeSlot(selectedTimeSlot);
    };

    const handleSubmit = () => {
        // Mock submit action
        console.log(`Meal: ${meal}, Time Slot: ${timeSlot}`);
    };

    return (
        <div>
            <h1>Check-In</h1>
            <MealSelection onSelect={handleMealSelection} />
            <TimeSlot onSelect={handleTimeSlotSelection} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Checkin;
