import React from "react";
import Details from "./details/Details";
import Navigation from "./details/navigation/Navigation";
import MovieDetailsStyled from "./MovieDetailsStyled";

const MovieDetailsPage = () => {
  return (
    <MovieDetailsStyled>
      <button
        type="button"
        // onClick="onHandleGoBack"
      >
        Go Back
      </button>
      <div className="details">
        <div className="details__info">
          <img src="" alt="" />
          <div className="details__info-description">
            <h2>
              "title" <span>"(score vote_average)"</span>
            </h2>
            <h3>
              Overview
              <span>overview</span>
            </h3>
            <h3>
              Genres
              <span>"genres[id,name]"</span>
            </h3>
          </div>
        </div>
        <h4>Additional information</h4>
      </div>
      <Navigation />
      <Details />
    </MovieDetailsStyled>
  );
};

//title release_date
//user score vote_average
//overview
//genres[{id,name}]

export default MovieDetailsPage;
