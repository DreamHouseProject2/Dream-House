import React, { useState } from 'react';
import ImageBackgroundMain from '../../assets/img/background-main.png';
import ImgSearchIcon from '../../assets/img/icon-search.svg';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function MainImage() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();

    const inputFind = event => {
        setSearch(event.target.value);
    };

    const submitAction = search => {
        dispatch(push('/search/?search=' + search));
    };
    return (
        <>
            <section class="main">
                <img class="background" src={ImageBackgroundMain} alt="" />
                <div class="search">
                    <img id="search-mag" onClick={() => submitAction(search)} src={ImgSearchIcon} alt="" />
                    <input onChange={inputFind} type="text" name="" placeholder="Address, city or state" id="search" />
                </div>
                <article class="text">
                    <h1>
                        Discover a place <br /> you’ll love to live
                    </h1>
                    <h4>
                        Check out the latest homes <br /> based on your personal preferences.
                    </h4>
                </article>
            </section>
        </>
    );
}

export default MainImage;
