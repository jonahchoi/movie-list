import React, {useState} from 'react';

const Movie = ({movie, watchedFilter, shown}) => {
  const [watched, setWatched] = useState(false);

  const toggleElement = () => {
    if(!shown || (watchedFilter === 'WATCHED' && !watched) || (watchedFilter === 'TO_WATCH' && watched)) {
      return 'movie hidden';
    }
    return 'movie';
  }

  return(
    <div className={toggleElement()}>
      <p className="movie-title">{movie.title}</p>
      <button className={`movie-button ${watched ? 'active-tab' : ''}`} onClick={()=>setWatched(!watched)}>
        {watched ? 'Watched' : 'To Watch'}
      </button>
    </div>
  )
}

export default Movie;