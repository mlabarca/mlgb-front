import React from "react";
import { Item } from 'semantic-ui-react'
import JobItem from './JobItem'

function JobList({searchResults, setJob}){
  const handleView = jobItem => {
    setJob(jobItem);
  }

  return (
    <Item.Group link divided>
      {
        searchResults.length > 0 ?
        searchResults.map(jobItem => <JobItem key={jobItem.id} jobData={jobItem} handleView={handleView}/>)
        : 'No current results for your search. Try something else!'
      }
    </Item.Group>
  );
}

export default JobList;
