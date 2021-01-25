import React, { useState } from "react";
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { fetchMovies } from "../../../api/api";
import MoviesPageStyled from "./MoviesPageStyled";

const initialState = {
  searchMovies: [],
  query: "",
  serching: "false",
};
const MoviesPage = () => {
  const [state, setState] = useState({ ...initialState });
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const onHandleChange = (e) => {
    const { value } = e.target;
    setState({ query: value, serching: "true" });
  };

  const getMovies = async (query) => {
    const result = await fetchMovies(query);
    console.log("getMovies result", result);
    setState((prev) => ({
      ...prev,
      searchMovies: [...result],
    }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    getMovies(state.query);
    history.push({
      search: `?query=${state.query}`,
    });

    //console.log("onFormSubmit state.query ==>>", query);
  };
  const { searchMovies, query } = state;
  console.log("searchMovies", searchMovies);
  return (
    <MoviesPageStyled>
      <div className="movies">
        <h2>Movies</h2>
        <form className="movies__form" onSubmit={onFormSubmit}>
          <input
            className="movies__form-input"
            type="text"
            placeholder="Search movies"
            onChange={onHandleChange}
            value={query}
          />
          <button type="submit" className="movies__form-btn">
            <span className="movies__form-btn-label">Search</span>
          </button>
        </form>
        <ul>
          {searchMovies &&
            searchMovies.map((movie, index) => (
              <li key={`${movie.id}${index}`}>
                <NavLink
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: {
                      from: location.pathname,
                      movieId: movie.id,
                    },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
        </ul>
        {/* {state.serching && <MoviesList dataMoviesSearch={dataMoviesSearch} />} */}
      </div>
    </MoviesPageStyled>
  );
};

export default MoviesPage;
// class MoviesPage extends Component {
//   state = {
//     searchMovies: [],
//     query: "",
//     serching: false,
//   };

//   onHandleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ query: value, serching: true });
//   };

//   onFormSubmit = (e) => {
//     const { query } = this.state;
//     e.preventDefault();
//     fetchMovies(query).then((response) => {
//       //console.log("response ==>>", response);
//       this.setState((prev) => ({
//         ...prev,
//         searchMovies: [...response],
//       }));
//       // this.props.history.push({
//       //   search: `?query=${query}`,
//       // });
//     });
//     //console.log("onFormSubmit this.state.query ==>>", query);
//   };

//   render() {
//     const { searchMovies } = this.state;
//     return (
//       <MoviesPageStyled>
//         <div className="movies">
//           <h2>Movies</h2>
//           <form className="movies__form" onSubmit={this.onFormSubmit}>
//             <input
//               className="movies__form-input"
//               type="text"
//               placeholder="Search movies"
//               onChange={this.onHandleChange}
//             />
//             <button type="submit" className="movies__form-btn">
//               <span className="movies__form-btn-label">Search</span>
//             </button>
//           </form>
//           <ul>
//             {searchMovies.map((movie, index) => (
//               <li key={`${movie.id}${index}`}>
//                 <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
//               </li>
//             ))}
//           </ul>
//           {/* {state.serching && <MoviesList dataMoviesSearch={dataMoviesSearch} />} */}
//         </div>
//       </MoviesPageStyled>
//     );
//   }
// }

// export default MoviesPage;
