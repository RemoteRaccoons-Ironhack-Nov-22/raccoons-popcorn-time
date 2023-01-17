import { useState } from "react";
import moviesFromJson from "../data/movies.json"
import "./Main.css"

function Main() {


  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (idOfTheMovieToDelete) => {

    //calc the new list of movies
    const newListOfMovies = moviesArr.filter( (movie) => {
      return movie.id !== idOfTheMovieToDelete;
    });

    //update state
    setMoviesArr(newListOfMovies);
  }
  

  return (
    <div className="Main">

      <h2>Current number of movies: {moviesArr.length}</h2>

      {moviesArr.map( (movieDetails) => {
        return(
          <div key={movieDetails.id} className="card movie">
            <p>{movieDetails.title}</p>
            <p>Rating: {movieDetails.rating}</p>
            <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete this movie</button>
          </div>
        );
      })}

      
    </div>
  )
}

export default Main;