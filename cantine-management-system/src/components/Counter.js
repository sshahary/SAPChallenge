import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Meals Served: {count}</h1>
            <button onClick={handleIncrement}>Add Meal</button>
        </div>
    );
};

export default Counter;
