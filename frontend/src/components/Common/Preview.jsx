import React, { useState, useEffect } from 'react';
import API from '../../API';
import ImgIconBack from '../../assets/img/icon-back.svg';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { push } from 'connected-react-router';

const api = new API();

function Preview() {
    const { id } = useParams();
    const [home, setHome] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        api.getHome(id)
            .then(home => {
                setHome(home);
            })
            .catch(error => {
                alert('Faild to connect API: /house/:id/');
            });
    }, []);

    const clickback = () => {
        dispatch(push('/'));
    };
    return (
        <div>
            <section class="preview">
                <div class="title" onClick={clickback}>
                    <img class="back" src={ImgIconBack} alt="" />
                    <button>Go back</button>
                </div>
                <div>
                    {home && (
                        <img
                            class="main_image"
                            src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image}
                            alt=""
                        />
                    )}
                    {home && (
                        <div class="multi-images">
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/dwzjr9dg5/' + home.sub_image1}
                                alt=""
                            />
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/dwzjr9dg5/' + home.sub_image2}
                                alt=""
                            />
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/dwzjr9dg5/' + home.sub_image3}
                                alt=""
                            />
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/dwzjr9dg5/' + home.sub_image4}
                                alt=""
                            />
                        </div>
                    )}
                </div>
                {home && (
                    <table>
                        <tr class="table-head">
                            <th>{home.address}</th>
                            <td>${home.price}</td>
                        </tr>
                        <tr>
                            <th>{home.state}</th>
                            <td>Est. mortgage ${home.rent_price}/mo*</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button className="gc">
                                    {' '}
                                    <a href="/">Get Contact</a>
                                </button>
                            </td>
                        </tr>
                    </table>
                )}
            </section>
        </div>
    );
}

export default Preview;
