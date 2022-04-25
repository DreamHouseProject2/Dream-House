import axios from 'axios';
export const LOGIN_USER_KEY = 'HOME_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = 'https://backend-dream-house.herokuapp.com/';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    // POST API

    sellrequest = async data => {
        console.log('connected to API');

        const savedPost = await api
            .post(
                '/sellrequest/add/',
                {
                    address: data.address,
                    sqft: data.sqft,
                    age_building: +data.age_building
                },
                { requireToken: true }
            )
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    signUp = async (user_name, email, password) => {
        const savedPost = await api
            .post('/users/signup/', {
                user_name: user_name,
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    signIn = async (email, password) => {
        const savedPost = await api
            .post('/users/signin/', {
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    //  HOMES//////////////

    getHomes = async (search, tagId) => {
        let url = '/house/';
        let query = new URLSearchParams();
        if (tagId) {
            query.append('tag', tagId);
        }
        if (search) {
            query.append('search', search);
        }

        if (query.toString() !== '') {
            url += '?' + query.toString();
        }

        const homes = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return homes;
    };

    getHome = async id => {
        const homes = await api
            .get('/house/' + id + '/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return homes;
    };

    //  TAGS API
    getTags = async () => {
        const tags = await api
            .get('/tags/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return tags;
    };

    getFavourites = async () => {
        const favourites = await api
            .get('/favourites/', { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return favourites;
    };

    addFavourites = async addFavouriteBody => {
        //{homeId: homeId} = {homeId}
        const savedPost = await api
            .post('/favourites/add/', addFavouriteBody, { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    deleteFavourites = id => {
        return api.delete(`favourites/delete/${id}`, { requireToken: true });
    };
}
