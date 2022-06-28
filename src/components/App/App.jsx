import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const Layout = lazy(() =>
  import("../Layout/Layout" /* webpackChunkName: "layout" */)
);

const HomePage = lazy(() =>
  import("../page/HomePage" /* webpackChunkName: "home-view" */)
);

const MoviesPage = lazy(() =>
  import("../page/MoviesPage" /* webpackChunkName: "movies-view" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "../page/MovieDetailsPage" /* webpackChunkName: "movie-details-view" */
  )
);

const MovieCredits = lazy(() =>
  import("../MovieCredits" /* webpackChunkName: "movies-credits" */)
);
const MovieReviews = lazy(() =>
  import("../MovieReviews" /* webpackChunkName: "movie-reviews" */)
);

export default function App() {
  return (
    <Suspense
      fallback={Loading.circle({
        svgColor: "#ff6b01",
        cssAnimationDuration: 800,
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
