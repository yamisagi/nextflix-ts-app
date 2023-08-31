const API_KEY = process.env.TMDB_API_KEY;
import { toastErrorNotify, toastSuccessNotify } from '../utils/ToastMessage';

export const getMovies = async (type: string) => {
  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
  try {
    const res = await fetch(URL);
    const { results } = await res.json();
    return results;
  } catch (err) {
    toastErrorNotify('Failed to fetch movies');
    console.log(err);
  }
};

export const getVideoKey = async (movieId: number) => {
  const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  try {
    const res = await fetch(videoUrl);
    const data = await res.json();
    return data?.results[0]?.key;
  } catch (err) {
    toastErrorNotify('Failed to fetch video');
    console.log(err);
  }
};

export const getMovieDetail = async (movieId: number) => {
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const stringURL = movieDetailBaseUrl.toString();
    const res = await fetch(stringURL);
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    toastErrorNotify('Failed to fetch movie details');
    console.log(err);
  }
};
