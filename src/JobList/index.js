import React from "react";

function JobList({searchResults, setJob}){
  const handleView = jobItem => {
    setJob(jobItem);
  }

  return (
    <ul>
      {
        searchResults.length > 0 ?
        searchResults.map(jobItem => <li><button onClick={() => handleView(jobItem)}> VIEW </button>  {jobItem.title} - {jobItem.salary} - {jobItem.remote ? 'Remote!' : 'In-office'} - {jobItem.city} , {jobItem.country} - {jobItem.company ? jobItem.company.name : ''}</li>)
        : 'No current results for your search. Try something else!'
      }
    </ul>
  );
}

export default JobList;
