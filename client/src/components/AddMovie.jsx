import React, {useState} from 'react';
import Parse from '../parse.js';

const AddMovie = ({setMovieList, movieList}) => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Parse.create({title: movieTitle}, (data) => {
      setMovieList(data);
    });
    // setMovieList([...movieList, {title: movieTitle}]);
    setMovieTitle('');
  }

  return(
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input type="text" name="movieTitle" value={movieTitle} placeholder="Add a movie..." onChange={(e) => setMovieTitle(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddMovie;