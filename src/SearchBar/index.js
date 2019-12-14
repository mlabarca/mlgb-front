import React, {useState, useEffect, useContext} from "react";
import {SessionContext} from '../sessions/session_utils';

function SearchBar({setSearchResults}){
  const {session} = useContext(SessionContext);
  const [searchQuery, setSearchQuery] = useState("");
  const baseUrl = 'https://mighty-fortress-18011.herokuapp.com/jobs/search?q='

  useEffect(() => {
    const url = `${baseUrl}${searchQuery}&email=${session.email}`
    window.fetch(url)
      .then(response => response.json())
      .then(json => setSearchResults(json['jobs']))
      .catch(error => console.log(error));
  }, [searchQuery]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Jobs"
      value={searchQuery}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
