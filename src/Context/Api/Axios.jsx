import axios from 'axios';

// const baseUrl = import.meta.env.VITE_BASE_URL;
const baseUrl = "https://dataentry-o9h9.onrender.com";

// Get Request
export const apiGet = (path) => {
    return axios.get(`${baseUrl}${path}`)
}

// Post Request
export const apiPost = (path, data) => {
    return axios.post(`${baseUrl}${path}`, data)
}
