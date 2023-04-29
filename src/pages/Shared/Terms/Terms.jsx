import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms & Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste unde expedita magni esse! Quas laboriosam quidem consectetur possimus sed sequi quisquam ducimus beatae est tenetur provident rerum, laborum accusantium illum ipsum ea, illo a autem quos nobis nisi delectus! Praesentium, hic officiis dicta perspiciatis eum tempore tempora dolor provident!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;