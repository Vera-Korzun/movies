import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieCast } from "../../../../../api/api";

const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  //console.log(" cast history", history);

  const getCast = async (id) => {
    const result = await fetchMovieCast(id);
    //console.log("result", result);
    setState({ ...result });
  };

  useEffect(() => {
    getCast(location.state.movieId);
    // eslint-disable-next-line
  }, []);

  const { cast } = state;
  //console.log("cast", cast);
  return (
    <div className="cast">
      <ul className="cast__list">
        {cast &&
          cast.map((item) => (
            <li className="cast__list-item" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                width="100px"
              />
              <p className="cast__list-item-name"> {item.name}</p>
              <p className="cast__list-item-character">
                Character: {item.character}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;

// class Cast extends Component {
//   state = { cast: [] };

//   componentDidMount() {
//     //console.log("this.props.match.params", this.props.match.params);
//     fetchMovieCast(this.props.match.params.id).then((cast) => {
//       //console.log("cast", cast);
//       this.setState({
//         cast: cast,
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="cast">
//         <ul className="cast__list">
//           {this.state.cast.map((item) => (
//             <li className="cast__list-item" key={item.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
//                 alt={item.name}
//                 width="100px"
//               />
//               <p className="cast__list-item-name"> {item.name}</p>
//               <p className="cast__list-item-character">
//                 Character: {item.character}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Cast;
