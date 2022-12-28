import axios from "axios";

const BaseURL = 'http://localhost:5000/';

const headers = {
    'content-type': 'application/json'
}

export const AxiosInstance = axios.create({
    BaseURL,
    headers
});