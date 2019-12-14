import React from "react";

function Job({ job, handleBack }){

  return (
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
  );
}

export default Job;
