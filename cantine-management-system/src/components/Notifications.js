import React, { useEffect, useState } from 'react';

const Notifications = () => {
    const [orders, setOrders] = useState(0);

    useEffect(() => {
        // Mock orders update every N minutes
        const intervalId = setInterval(() => {
            setOrders(prevOrders => prevOrders + Math.floor(Math.random() * 5));
        }, 60000); // Every minute for this example

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Current Orders: {orders}</h1>
        </div>
    );
};

export default Notifications;
