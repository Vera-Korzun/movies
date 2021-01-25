import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import(
        "../components/pages/homepage/HomePage" /* webpackChunkName: "HomePage"*/
      )
    ),
  },
  {
    path: "/movies",
    name: "Movies",
    exact: true,
    component: lazy(() =>
      import(
        "../components/pages/moviespage/MoviesPage" /* webpackChunkName: "MoviesPage"*/
      )
    ),
  },
];

// const secondMainRoute = {
//   path: "/movies/:id",
//   name: "Movies ID",
//   exact: true,
//   component: lazy(() =>
//     import(
//       "../components/pages/moviedetails/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/
//     )
//   ),
// };

export {
  mainRoutes,
  //secondMainRoute
};
