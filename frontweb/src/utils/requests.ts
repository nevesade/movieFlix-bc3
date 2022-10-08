import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';
import { getAuthData } from './storage';


type LoginData = {
    username: string;
    password: string;
}





// const basicHeader = () =>  ' Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';


export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "https://movieflix-devsuperior.herokuapp.com";



export const requestBackendLogin = (loginData: LoginData) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: ' Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'


    });


    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers })
};



 
export const requestBackend = (config: AxiosRequestConfig) => {
   /*  const headers = config.withCredentials ? {

        ...config.headers,
        Authorization: " Bearer " + getAuthData().access_token
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers }); */

    return axios({...config, baseURL: BASE_URL});
}
 


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //console.log('A response deu certo');
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx (200) cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
        //console.log('Redirecionar o usuário para Login');
        history.push('/home');
        //logout();


    }
    return Promise.reject(error);
});

