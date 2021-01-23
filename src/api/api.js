const API_KEY = "f2e8f65ebe8d65366d5fe19e37f17d6e";

// export const fetchMovies = (search, page) => {
//   const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`;

//   return fetch(baseURL)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       return data.results;
//     });
// };

export const fetchMovies = (search) => {
  const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data.results;
    });
};

export const fetchTrending = () => {
  const baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data.results;
    });
};

export const fetchMovieDetails = (id) => {
  const baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=video`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
      //title release_date
      //user score vote_average
      //overview
      //genres[{id,name}]
    });
};

export const fetchMovieCast = (id) => {
  const baseURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data.cast;
      //profile_path
      //name
      //character
    });
};

export const fetchMovieReviews = (id) => {
  const baseURL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data.results[0].content;
    });
};

// fetchMovieDetails("504949");
// fetchMovieCast("504949");
// fetchMovieReviews("504949");
