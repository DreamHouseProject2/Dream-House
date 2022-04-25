import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomes, clearHomes } from '../reducks/homes/operations';
import { getHomes } from '../reducks/homes/selectors';
import MainImage from '../components/Common/MainImage';
import { getTags } from '../reducks/tags/selectors';
import { fetchTags } from '../reducks/tags/operations';
import CategoryCard from '../components/Common/CategoryCard';
import { useHistory } from 'react-router';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const homes = getHomes(selector);
    const history = useHistory();
    useEffect(() => {
        dispatch(clearHomes());
        dispatch(fetchHomes());
    }, []);
    const tags = getTags(selector);
    const clickHome = homeId => {
        dispatch(history.push(`/preview/${homeId}/`));
    };

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

    return (
        <>
            <MainImage />
            <section class="option">
                <h4>
                    Whether you're buying, selling or renting, <br />
                    we can help you move forward.
                </h4>
                <ul class="icons">{tags && tags.map(tag => <CategoryCard tag={tag} />)}</ul>
            </section>
            <section class="explore">
                <div>
                    <h4>Explore homes on Dream House</h4>
                </div>
                <div class="images">
                    <ul class="column">
                        <ul class="rows">
                            {homes &&
                                homes.map(home => (
                                    <li class="single" key={home.id}>
                                        <img src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image} alt="" />
                                        <div class="box-main">
                                            <h1>{home.address}</h1>
                                        </div>
                                        <button id="vh" onClick={() => clickHome(home.id)}>
                                            View more
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
