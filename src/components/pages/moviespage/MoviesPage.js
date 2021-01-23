import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { fetchMovies } from "../../../api/api";
import MovieDetailsPage from "../moviedetails/MovieDetailsPage";
import MoviesPageStyled from "./MoviesPageStyled";

class MoviesPage extends Component {
  state = {
    searchMovies: [],
    query: "",
    serching: false,
  };

  // componentDidMount = () => {
  //   fetchMovies().then((response) => {
  //     //console.log("response ==>>", response);
  //     this.setState((prev) => ({
  //       ...prev,
  //       trendMovies: [...response],
  //     }));
  //   });
  // };

  onHandleChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value, serching: true });
  };

  onFormSubmit = (e) => {
    const { query } = this.state;
    e.preventDefault();
    fetchMovies(query).then((response) => {
      console.log("response ==>>", response);
      this.setState((prev) => ({
        ...prev,
        searchMovies: [...response],
      }));
    });
    console.log("onFormSubmit this.state.query ==>>", query);
  };

  render() {
    const { searchMovies } = this.state;
    return (
      <MoviesPageStyled>
        <div className="movies">
          <h2>Movies</h2>
          <form className="movies__form" onSubmit={this.onFormSubmit}>
            <input
              className="movies__form-input"
              type="text"
              placeholder="Search movies"
              onChange={this.onHandleChange}
            />
            <button type="submit" className="movies__form-btn">
              <span className="movies__form-btn-label">Search</span>
            </button>
          </form>
          <ul>
            {searchMovies.map((movie, index) => (
              <li key={`${movie.id}${index}`}>
                <NavLink to={`/movies/:${movie.id}`}>{movie.title}</NavLink>
                {/* <Route
                  path={`/movies/:${movie.id}`}
                  component={MovieDetailsPage}
                /> */}
              </li>
            ))}
          </ul>
          {/* {state.serching && <MoviesList dataMoviesSearch={dataMoviesSearch} />} */}
        </div>
      </MoviesPageStyled>
    );
  }
}

export default MoviesPage;
