import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import ImgLogoIcon from '../assets/img/icon-logo.svg';
import ImgCloseIcon from '../assets/img/icon-close.svg';
import MainImage from '../components/Common/MainImage';
import { useHistory } from 'react-router';
import { getUser } from '../reducks/users/selectors';

function Signin() {
    const dispatch = useDispatch();
    let history = useHistory();
    const selector = useSelector(state => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        email: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const signInButton = async () => {
        setIsLoading(true);
        await dispatch(signIn(values, () => history.push('/')));
        setIsLoading(false);
        //history.push('/sign');
    };

    const closeButton = () => {
        dispatch(() => history.push('/'));
    };

    return (
        <div>
            <MainImage />
            <div class="main2">
                <div class="signin">
                    <img onClick={closeButton} class="close" src={ImgCloseIcon} alt="" />
                    <img class="logo" src={ImgLogoIcon} alt="" />
                    <p class="head">Sign in</p>
                    <p>Email</p>
                    <input
                        placeholder="Type your email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <p>Password</p>
                    <input
                        placeholder="Type your password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={signInButton}>{`${isLoading ? 'Logging In' : 'Login'}`}</button>
                    <a class="joinus" href="/signup">
                        JOIN US
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Signin;
