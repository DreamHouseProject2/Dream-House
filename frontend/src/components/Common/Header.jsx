import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImgUseIcon from '../../assets/img/icon-user.svg';
import ImgLogoIcon from '../../assets/img/icon-logo.svg';
import Find from './Find';
import { push } from 'connected-react-router';
import Option from './option';
import { getUser } from '../../reducks/users/selectors';
const key = localStorage.getItem('HOME_LOGIN_USER_KEY');

console.log('called out of component');

export default function Header() {
    const [pathname, setPathname] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const [showOption, setShowOption] = useState(false);
    const user = getUser(selector);
    const token = user ? user.token : null;
    const [checkUser, setCheckUser] = useState(false);

    console.log('called above useEffect');
    useEffect(() => {
        console.log('called useEffect');
        setPathname(window.location.pathname);
        if (token) {
            setCheckUser(true);
        }
    }, [user]);

    return (
        <>
            <nav class="header2">
                <img class="logo" src={ImgLogoIcon} onClick={() => dispatch(push('/'))} alt="" />
                <Find />
                {checkUser && checkUser == true ? (
                    <div class="drop-down" onClick={() => setShowOption(true)}>
                        <img src={ImgUseIcon} alt="" />
                        <button>{user.user_name}</button>
                    </div>
                ) : (
                    <p>
                        <a href="/signin">SignIn</a>/<a href="signup">SignUp</a>
                    </p>
                )}
            </nav>
            {showOption && <Option setShowOption={setShowOption} />}
        </>
    );
}
