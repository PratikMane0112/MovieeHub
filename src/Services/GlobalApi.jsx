import axios from "axios";

// Accessing environment variables
const movieBaseUrl = import.meta.env.VITE_BASEURL;
const api_key = import.meta.env.VITE_API_KEY;

// Constructing URLs using environment variables
const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;
const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
    getTrendingVideos,
    getMovieByGenreId
};
