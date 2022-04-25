import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function CategoryCard({ tag }) {
    const dispatch = useDispatch();
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const pushTotag = tagId => {
        if (key) {
            if (tag.type === 'Sell') {
                dispatch(push('/sale'));
            } else {
                dispatch(push(`/search?tag_id=${tagId}&tag_type=${tag.type}`));
            }
        } else {
            dispatch(push('/signup'));
        }
    };

    return (
        <li class="home" key={tag.id}>
            <img src={tag.image} alt="" />
            <h1>{tag.name}</h1>
            <p>{tag.description}</p>
            <button onClick={() => pushTotag(tag.id)}>Search homes</button>
        </li>
    );
}
