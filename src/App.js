import React, { useState, useEffect }  from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [job, setJob] = useState();

  useEffect(() => {
    const url = `https://mighty-fortress-18011.herokuapp.com/jobs/search?q=${searchQuery}`
    window.fetch(url)
      .then(response => response.json())
      .then(json => setSearchResults(json['jobs']))
      .catch(error => console.log(error));
  }, [searchQuery]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleView = jobItem => {
    setJob(jobItem);
  }

  const handleBack = () => setJob();

  return (
    <div className="App">
      {
        job ?
        <div>
          <button onClick={handleBack}> BACK </button>
          <h1>
            {job.title} ({job.seniority})
          </h1>
          <h2>{job.company.name}</h2>
          <h3> Job description </h3>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
          <h3> Your functions will be:</h3>
          <div dangerouslySetInnerHTML={{ __html: job.functions }} />
          <h3> Your amazing benefits will be: </h3>
          <div dangerouslySetInnerHTML={{ __html: job.benefits }} />
          <h3> All about {job.company.name}: </h3>
          <p> {job.company.about} </p>

        </div>
        :
        <div>
          <input
            type="text"
            placeholder="Search Jobs"
            value={searchQuery}
            onChange={handleChange}
          />
          <ul>
            {
              searchResults.length > 0 ?
              searchResults.map(jobItem => <li><button onClick={() => handleView(jobItem)}> VIEW </button>  {jobItem.title} - {jobItem.salary} - {jobItem.remote ? 'Remote!' : 'In-office'} - {jobItem.city} , {jobItem.country} - {jobItem.company ? jobItem.company.name : ''}</li>)
              : 'No current results for your search. Try something else!'

            }

          </ul>
        </div>
      }
    </div>
  );
}

export default App;
