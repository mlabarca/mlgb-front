import React, { useState, useEffect }  from "react";
import Job from './Job';
import JobList from './JobList';
import SearchBar from './SearchBar';
import UserArea from './sessions/UserArea';
import { SessionContext, getSessionCookie, setSessionCookie } from './sessions/session_utils';

import { Container, Menu, Segment } from 'semantic-ui-react'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [job, setJob] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [session, setSession] = useState(getSessionCookie());

  useEffect(() => {
    setSessionCookie(session);
  }, [session]);

  return (
    <div className="App">
      <SessionContext.Provider value={{session, setSession}}>

        <Segment vertical>
          <Menu fixed={'top'} size='large' widths={2}>
            <Container>
              <Menu.Item active>
                Search Get on Board!
              </Menu.Item>
              <Menu.Item position='right'>
                <UserArea />
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>

        <Container style={{paddingTop: '100px'}}>
         {
           job ?
           <Job job={job} handleBack={() => setJob()} /> :
           <div>
             <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchResults={setSearchResults} />
             <JobList searchResults={searchResults} setJob={setJob} />
           </div>
         }
        </Container>



      </SessionContext.Provider >
    </div>
  );
}

export default App;
