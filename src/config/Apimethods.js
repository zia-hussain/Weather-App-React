// import React from 'react'
// import axios from 'axios'
// let api_key = "45d11526b939c7d57e8bc1fcce59baf6"
// let apiHandle = axios.create({
//     baseURL: 'https://api.openweathermap.org/data/2.5/weather?units=Metric&appid=45d11526b939c7d57e8bc1fcce59baf6'
//     // baseURL:'https://jsonplaceholder.typicode.com/'
// })
// const Get = (city) => {
//     // Append the city parameter to the URL
//     return apiHandle.get(`&q=${city}`);
// };

// const GetById = (endPoint, id) => {
//     return apiHandle.get(`${endPoint}/${id}`);
// };

// const Post = (endPoint, body) => {
//     console.log('body', body);
//     return apiHandle.post(endPoint, body);
// };

// const Put = (endPoint, id, body) => {
//     return apiHandle.put(`${endPoint}/${id}`, body);
// };

// const Delete = (endPoint, id) => {
//     return apiHandle.delete(`${endPoint}/${id}`);
// };

// export { Get, Post, GetById, Put, Delete };
import React from 'react';
import axios from 'axios';

const api_key = "45d11526b939c7d57e8bc1fcce59baf6";

const apiHandle = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        units: 'metric',
        appid: api_key
    }
});

const Get = (city) => {
    return apiHandle.get('/weather', {
        params: {
            q: city
        }
    });
};

const GetById = (endPoint, id) => {
    return apiHandle.get(`${endPoint}/${id}`);
};

const Post = (endPoint, body) => {
    console.log('body', body);
    return apiHandle.post(endPoint, body);
};

const Put = (endPoint, id, body) => {
    return apiHandle.put(`${endPoint}/${id}`, body);
};

const Delete = (endPoint, id) => {
    return apiHandle.delete(`${endPoint}/${id}`);
};

export { Get, Post, GetById, Put, Delete };
