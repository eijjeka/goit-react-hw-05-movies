import axios from "axios";

const API_KEY = "cd00d8c55831cbeec8ccdad1db16d6d2";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function fetchPopularFilms() {
  const response = await axios.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
}

export async function fetchSearchFilmByName(filmName) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${filmName}&page=1&include_adult=false`
  );
  return response.data.results;
}

export async function fetchFilmInfo(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=cd00d8c55831cbeec8ccdad1db16d6d2&language=en-US`
  );
  return response.data;
}

export async function fetchMovieReviews(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
}

export async function fetchMovieCredits(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.cast;
}
