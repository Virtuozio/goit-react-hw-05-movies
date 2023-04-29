import axios from 'axios';

const API_KEY = '8ac13a6e4c030357e0a4de2fb59da064';
export const getTrendingFilms = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
export const getMoviesByName = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
export const getMoviesById = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getMovieCast = async id => {
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
