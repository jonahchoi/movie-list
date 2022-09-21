import React, {useState} from 'react';

const SearchBar = ({handleSearch, setWatchedFilter}) => {
  const [searchString, setSearchString] = useState('');
  const [watchedActive, setWatchedActive] = useState(false);
  const [toWatchActive, setToWatchActive] = useState(false);
  const [allActive, setAllActive] = useState(true);

  const handleActivity = (setFn) => {
    setWatchedActive(false);
    setToWatchActive(false);
    setAllActive(false);
    setFn(true);
  }

  return(
    <form className="search-form"
      onSubmit={(e) => {
      e.preventDefault();
      handleSearch(searchString);
      setSearchString('');
    }} >
      <button
        className={watchedActive ? 'active-tab' : ''}
        onClick={()=> {
          setWatchedFilter('WATCHED');
          handleActivity(setWatchedActive);
        }
      }>Watched</button>
      <button
       className={toWatchActive ? 'active-tab' : ''}
       onClick={()=>{
        setWatchedFilter('TO_WATCH');
        handleActivity(setToWatchActive);
       }
      }>To Watch</button>
      <button
       className={allActive ? 'active-tab' : ''}
       onClick={()=>{
        setWatchedFilter('ALL');
        handleActivity(setAllActive);
       }
      }>All</button>
      <input type="text" name="searchString" value={searchString} placeholder="Search..." onChange={(e) => setSearchString(e.target.value)}></input>
      <button type="submit">Go!</button>
    </form>
  )
}

export default SearchBar;