import axios from 'axios'

export const clientAxios = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de'