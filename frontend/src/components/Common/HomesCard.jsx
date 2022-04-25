import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import ImgFavIcon from '../../assets/img/icon-fav.svg';
import { addFavourites, fetchFavourites } from '../../reducks/favoutite/operations';
import { getFavourites } from '../../reducks/favoutite/selectors';

function HomesCard({ home, favourite }) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const clickSaved = home => {
        dispatch(addFavourites({ home: home.id }));
        dispatch(fetchFavourites());
    };
    const clickHome = homeId => {
        dispatch(push('/preview/' + homeId + '/'));
    };
    console.log('Home', home);
    console.log('Favourite', favourite);
    return (
        <div>
            <li key={home.id} class="box">
                {home &&
                    favourite &&
                    Object.values(favourite).filter(favouriteHome => {
                        console.log('sdasd', favouriteHome);
                        return home.id === favouriteHome.home.id;
                    }).length === 0 && (
                        <img
                            class="fav"
                            onClick={() => {
                                clickSaved(home);
                            }}
                            src={ImgFavIcon}
                            alt=""
                        />
                    )}
                <img
                    onClick={() => clickHome(home.id)}
                    src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image}
                    alt=""
                />

                <h3>{home.price}</h3>
                <p>
                    {home.layout} 1,800 sqft <br />
                    <br />
                    {home.state}, {home.address}
                </p>
            </li>
        </div>
    );
}

export default HomesCard;
