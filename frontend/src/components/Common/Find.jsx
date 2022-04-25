import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImgSearchIcon from '../../assets/img/icon-search.svg';
import { push } from 'connected-react-router';

const Find = () => {
    const [showSearchBar, setSearchBar] = useState(false);
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    let pageURL = window.location.toString();

    const inputFind = event => {
        setSearch(event.target.value);
    };

    const submitAction = search => {
        dispatch(push('/search/?search=' + search));
    };

    useEffect(() => {
        if (pageURL.includes('search') || pageURL.includes('preview') || pageURL.includes('sale')) {
            setSearchBar(true);
        }
    }, []);

    return (
        <div>
            {showSearchBar && (
                <div class="search">
                    <img onClick={() => submitAction(search)} src={ImgSearchIcon} alt="" />
                    <input type="text" onChange={inputFind} name="" placeholder="Address, city or state" id="search" autocomplete="false"/>
                </div>
            )}
        </div>
    );
};

export default Find;
