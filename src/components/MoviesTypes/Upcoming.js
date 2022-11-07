import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const About = () => {
  const [movies, setMovies] = useState([]);

  const getUpcomingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    console.log();
    setMovies(data.results);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return (
    <>
      <div className='movie_types'>
        <Link to="/latest"><button>Latest Movies</button></Link>
        <Link to="/popular"><button>Popular Movies</button></Link>
        <Link to="/toprated"><button>Top Rated Movies</button></Link>
        <Link to="/upcoming"><button>Upcoming Movies</button></Link>
      </div>
      <div className="container">
        <div className="row pt-4">
            {
                movies.map((movie) => (
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
                ))
            }
        </div>
      </div>
    </>
  )
}

export default About