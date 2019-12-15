import React, {useState, useEffect, useContext} from "react";
import {SessionContext} from '../sessions/session_utils';
import { Input, Icon, Loader } from 'semantic-ui-react';
import axios from 'axios';

function SearchBar({dependencies, setSearchQuery, setSearchResults}){
  const {session} = useContext(SessionContext);
  const searchQuery = dependencies.searchQuery;
  const [loading, setLoading] = useState(false);
  const baseUrl = 'https://mighty-fortress-18011.herokuapp.com/jobs/search';

  useEffect(() => {
    if (searchQuery === '') return;
    const params = {q: searchQuery};
    if(session.email) params['email'] = session.email;

    // Fix for favorite button state after viewing details.
    setSearchResults([]);
    setLoading(true);
    axios.get(baseUrl, {
      params: params
    })
    .then(json => {
      setSearchResults(json.data.jobs);
      setLoading(false);
    })
    .catch(error => console.log(error));
  }, [searchQuery, dependencies.job]);

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
