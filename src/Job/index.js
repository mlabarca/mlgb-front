import React from "react";
import { Container, Button, Header, Image as ImageComponent, Segment } from 'semantic-ui-react'

function Job({ job, handleBack }){

  return (
    <Container>
      <Button primary onClick={handleBack}>
        Back
      </Button>
      <Header as='h1'>
        <ImageComponent src={job.logo_url} />
        {job.title}
        <Header sub>{job.seniority}</Header>
      </Header>
      <Header as='h2' content={job.company.name}>
      </Header>
      <Header as='h3' content='Your functions will be:'>
      </Header>
      <Segment dangerouslySetInnerHTML={{ __html: job.functions }}>
      </Segment>
      <Header as='h3' content='Job description'>
      </Header>
      <Segment dangerouslySetInnerHTML={{ __html: job.description }}>
      </Segment>
      {
        job.benefits ?
        <div>
          <Header as='h3' content='Your amazing benefits will be:'>
          </Header>
          <Segment dangerouslySetInnerHTML={{ __html: job.benefits }}>
          </Segment>
        </div> : ''
      }
      <Header as='h3' content={`All about ${job.company.name}`}>
      </Header>
      <Segment>
        {job.company.about}
      </Segment>
    </Container>
  );
}

export default Job;
