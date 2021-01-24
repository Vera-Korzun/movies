import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
//import Details from "./details/Details";
import { fetchMovieDetails } from "../../../api/api";
//import Navigation from "./details/navigation/Navigation";
import moviesDetailsRoutes from "../../../routes/MoviesDetailsRouters";
import MovieDetailsStyled from "./MovieDetailsStyled";

class MovieDetailsPage extends Component {
  state = {
    detailsMovie: {
      genres: [],
    },
  };

  componentDidMount = () => {
    //console.log("this.props", this.props);
    fetchMovieDetails(this.props.match.params.id).then((response) => {
      //console.log("response ==>>", response);
      this.setState({ detailsMovie: response });
      //console.log("detailsMovie ==>>", this.state.detailsMovie);
    });
  };

  goBack = () => this.props.history.push("/");

  render() {
    //console.log("this.props", this.props);

    const {
      id,
      poster_path,
      title,
      release_date,
      overview,
      genres,
    } = this.state.detailsMovie;
    //console.log("id", id);

    // const { pathname } = this.props.location;
    // console.log("pathname", pathname);

    let releaseYear = "";
    if (!!release_date) {
      releaseYear = release_date.substring(0, 4);
    }

    return (
      <MovieDetailsStyled>
        <button type="button" onClick={this.goBack}>
          Go Back
        </button>
        <div className="details">
          <div className="details__info">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="250px"
            />
            <div className="details__info-description">
              <h2>{title}</h2>
              <span>{`(${releaseYear})`}</span>
              <h3>Overview</h3>
              <span>{overview}</span>
              <h3>Genres</h3>
              <ul>
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <h4>Additional information</h4>
          {moviesDetailsRoutes.map(({ name, path, exact }) => (
            <li key={`${id}${name}`}>
              <NavLink
                to={`${this.props.location.pathname}${path}`}
                exact={exact}
              >
                {name}
              </NavLink>
            </li>
          ))}
          <Switch>
            {moviesDetailsRoutes.map(({ name, exact, component }) => (
              <Route
                path={`/movies/:id/${name}`}
                exact={exact}
                key={`${id}${name}`}
                component={component}
              />
            ))}
          </Switch>

          {/* <Navigation />
          <Details /> */}
        </div>
      </MovieDetailsStyled>
    );
  }
}

export default MovieDetailsPage;

//title release_date
//user score vote_average
//overview
//genres[{id,name}]
