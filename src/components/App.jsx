import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import MovieCredits from "./MovieCredits";
import MovieReviews from "./MovieReviews";
import MovieDetailsPage from "./MovieDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:filmId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCredits />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
