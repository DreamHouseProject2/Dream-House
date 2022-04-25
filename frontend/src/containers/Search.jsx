import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { fetchHomes, clearHomes } from '../reducks/homes/operations';
import { getHomes } from '../reducks/homes/selectors';
import HomesCard from '../components/Common/HomesCard';
import { fetchFavourites } from '../reducks/favoutite/operations';
import { getFavourites } from '../reducks/favoutite/selectors';

const Search = () => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [tagId, setTagId] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const homes = getHomes(selector);
    const favourite = getFavourites(selector);

    useEffect(() => {
        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (parsed.tag_id !== undefined) {
            setTagId(parsed.tag_id);
        }
    }, []);

    useEffect(() => {
        if (search != null || tagId != null) {
            dispatch(clearHomes());
            dispatch(fetchHomes(search, tagId));
            dispatch(fetchFavourites());
        }
    }, [search, tagId]);

    return (
        <>
            <section class="buy">
                <div class="head">
                    {<h4>House for {parsed.tag_type ? parsed.tag_type : ''} Near me</h4>}
                    <ul class="images">
                        {homes.map(home => (
                            <HomesCard home={home} favourite={favourite} />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Search;
