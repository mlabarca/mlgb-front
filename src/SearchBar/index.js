import React, {useState, useEffect, useContext} from "react";
import {SessionContext} from '../sessions/session_utils';
import { Input, Icon, Dimmer, Loader } from 'semantic-ui-react'

function SearchBar({setSearchResults}){
  const {session} = useContext(SessionContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = 'https://mighty-fortress-18011.herokuapp.com/jobs/search?q='

  useEffect(() => {
    let url = `${baseUrl}${searchQuery}`
    if(session.email) url += `&email=${session.email}`;
    setLoading(true);
    window.fetch(url)
      .then(response => response.json())
      .then(json => {
        setSearchResults(json['jobs']);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [searchQuery]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
      <div>
        <Input value={searchQuery} onChange={handleChange} iconPosition='left' placeholder='Search jobs...' >
          <Icon name='search' />
          <input />
        </Input>
        <Loader active={loading}/>
      </div>
  );
}

export default SearchBar;
