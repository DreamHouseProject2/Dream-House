import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ home }) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    return (
        <li key={home.id} class="box">
            <img src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image} alt="" />
            <h3>{home.price}</h3>
            <p>
                {home.layout} 1,800 sqft <br />
                <br />
                {home.state}, {home.address}
            </p>
        </li>
    );
};

export default Card;
