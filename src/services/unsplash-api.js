import axios from "axios";


axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchGalleryWithQuery = async (query, page = 1, per_page = 12) => {
    const response = await axios.get(`/search/photos?page=${page}&per_page=${per_page}&query=${query}&client_id=${ACCESS_KEY}`);
    console.log(response)
    return response.data;
};
