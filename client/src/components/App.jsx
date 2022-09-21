import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import Movies from './Movies.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
var watchedFilters = {
  WATCHED: 'WATCHED',
  TO_WATCH: 'TO_WATCH',
  ALL: 'ALL'
}
const App = (props) => {
  const [movieList, setMovieList] = useState(movies);
  const [query, setQuery] = useState('');
  const [watchedFilter, setWatchedFilter] = useState(watchedFilters.ALL);

  const handleSearch = (input) => {
    setQuery(input);
  }

  return(
    <div>
      <h1 id="title">Movie List</h1>
      <AddMovie setMovieList={setMovieList} movieList={movieList} />
      <SearchBar handleSearch={handleSearch} setWatchedFilter={setWatchedFilter} />
      <Movies movieList={movieList} watchedFilter={watchedFilter} query={query}/>
    </div>
  )
};

export default App;