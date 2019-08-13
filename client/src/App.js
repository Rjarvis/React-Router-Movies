import React, { useState } from 'react';
// import { Movie, MovieList, SavedList} from '/src/Movies'; Not like this! This no work.  Don't know why.
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';
import SavedList from './Movies/SavedList.js';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {console.log(savedList)}
      <Router exact path='/' component={ MovieList } />
      <Router path={`/movies/`} component={ Movie } />
    </div>
  );
};

export default App;
