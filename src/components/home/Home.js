import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(data.results);
    setMovies(data.results);
    // console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <div className="row pt-4">
          {movies.map((movie) => (
            <div className="col-sm-4 pt-4">
            <div className="card">
              <div className="card-body">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">
                  {movie.overview}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
