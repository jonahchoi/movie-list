import React, {useState} from 'react';
import Parse from '../parse.js';

const Movie = ({movie, watchedFilter, handleToggle, shown}) => {
  // const [watched, setWatched] = useState(false);

  /* const toggleElement = () => {
    if(!shown || (watchedFilter === 'WATCHED' && !watched) || (watchedFilter === 'TO_WATCH' && watched)) {
      return 'movie hidden';
    }
    return 'movie';
  } */

  const toggleElement = () => {
    if(!shown || (watchedFilter === 'WATCHED' && !movie.watched) || (watchedFilter === 'TO_WATCH' && movie.watched)) {
      return 'movie hidden';
    }
    return 'movie';
  }

  return(
    <div className={toggleElement()}>
      <p className="movie-title">{movie.title}</p>
      <button className={`movie-button ${movie.watched ? 'active-tab' : ''}`} onClick={() => handleToggle(movie)}>
        {movie.watched ? 'Watched' : 'To Watch'}
      </button>
    </div>
  )
}

export default Movie;