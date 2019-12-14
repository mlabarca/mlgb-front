import React, { useState }  from "react";
import Job from './Job';
import JobList from './JobList';
import SearchBar from './SearchBar';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [job, setJob] = useState();

  return (
    <div className="App">
      {
        job ?
        <Job job={job} handleBack={() => setJob()} /> :
        <div>
          <SearchBar setSearchResults={setSearchResults} />
          <JobList searchResults={searchResults} setJob={setJob} />
        </div>
      }
    </div>
  );
}

export default App;
