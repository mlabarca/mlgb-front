import React, { useState, useEffect }  from "react";
import Job from './Job';
import JobList from './JobList';
import SearchBar from './SearchBar';
import UserArea from './sessions/UserArea';
import { SessionContext, getSessionCookie, setSessionCookie } from './sessions/session_utils';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [job, setJob] = useState();
  const [session, setSession] = useState(getSessionCookie());

  useEffect(() => {
    setSessionCookie(session);
  }, [session]);

  return (
    <div className="App">
      <SessionContext.Provider value={{session, setSession}}>
        <UserArea />
        <br />
        {
          job ?
          <Job job={job} handleBack={() => setJob()} /> :
          <div>
            <SearchBar setSearchResults={setSearchResults} />
            <JobList searchResults={searchResults} setJob={setJob} />
          </div>
        }
      </SessionContext.Provider >
    </div>
  );
}

export default App;
