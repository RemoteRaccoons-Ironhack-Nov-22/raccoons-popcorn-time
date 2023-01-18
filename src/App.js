import { useState } from "react";
import moviesFromJson from "./data/movies.json";

import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import SearchBox from "./components/SearchBox";
import Main from "./components/Main";
import Footer from "./components/Footer";

import './App.css';



function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);
  const [searchQuery, setSearchQuery] = useState("");


  const moviesToDisplay = moviesArr.filter( (movie) => {
    //note: we convert both strings to lowercase, so that our search is case-insensitive
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });



  const deleteMovie = (movieTitle) => {

    //calc the new list of movies
    const newListOfMovies = moviesArr.filter((movie) => {
      return movie.title !== movieTitle;
    });

    //update state
    setMoviesArr(newListOfMovies);
  }


  const createMovie = (newMovieObj) => {
    //update list of movies
    setMoviesArr((prevListOfMovies) => {
      const newList = [newMovieObj, ...prevListOfMovies];
      return newList;
    });
  }

  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToCreate={createMovie} />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
