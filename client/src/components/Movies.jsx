import React, {useState} from 'react';
import Movie from './Movie.jsx';

const Movies = ({movieList, watchedFilter, query}) => {
  return(
    <div>
      {movieList.map((movie, i) => {
        let shown = false;
        if(movie.title.toLowerCase().includes(query.toLowerCase())){
          shown = true;
        }
        return <Movie movie={movie} key={i} watchedFilter={watchedFilter} shown={shown}/>
      })}
    </div>
  )
}

export default Movies;