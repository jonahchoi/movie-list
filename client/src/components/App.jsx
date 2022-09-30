import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import Movies from './Movies.jsx';
import Parse from '../parse.js';

var watchedFilters = {
  WATCHED: 'WATCHED',
  TO_WATCH: 'TO_WATCH',
  ALL: 'ALL'
}
const App = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState('');
  const [watchedFilter, setWatchedFilter] = useState(watchedFilters.ALL);

  useEffect(() => {
    Parse.readAll((data) => {
      setMovieList(data);
    });
  }, []);

  const handleSearch = (input) => {
    setQuery(input);
  }
  const handleToggle = (movie) => {
    Parse.update(movie.id, !movie.watched, (data) => {
      setMovieList(data);
    });
  }

  return(
    <div>
      <h1 id="title">Movie List</h1>
      <AddMovie setMovieList={setMovieList} movieList={movieList} />
      <SearchBar handleSearch={handleSearch} setWatchedFilter={setWatchedFilter} />
      <Movies movieList={movieList} watchedFilter={watchedFilter} query={query} handleToggle={handleToggle} />
    </div>
  )
};

export default App;