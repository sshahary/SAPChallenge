import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Cantine Management System</h1>
            <Link to="/checkin">Check-In</Link><br/>
            <Link to="/admin">Admin Dashboard</Link>
        </div>
    );
};

export default HomePage;
