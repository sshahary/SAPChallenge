import React, { useState, useEffect } from 'react';

const TimeSlot = ({ onSelect }) => {
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        // Mock available time slots
        setTimeSlots(['12:00 PM - 12:30 PM', '12:30 PM - 1:00 PM', '1:00 PM - 1:30 PM']);
    }, []);

    const handleChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <div>
            <h2>Select Time Slot</h2>
            <select onChange={handleChange}>
                {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                ))}
            </select>
        </div>
    );
};

export default TimeSlot;
