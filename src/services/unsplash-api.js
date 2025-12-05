import axios from "axios";
const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchGalleryWithQuery = async (query, page = 1, per_page = 12) => {
    const response = await axios.get(`/search/photos?page=${page}&per_page=${per_page}&query=${query}&client_id=${apiKey}`);
    return response.data;
};
