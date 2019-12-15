import React from "react";
import { Item, Label } from 'semantic-ui-react'

function JobItem({jobData, handleView}){
  const remoteText = jobData.remote ? 'Remote!' : 'In-office';
  //
  return (
    <Item onClick={() => handleView(jobData)}>
      <Item.Image size='tiny' src={jobData.logo_url}/>

      <Item.Content>
        <Item.Header>{jobData.title}</Item.Header>
          {
            jobData.city ?
            <Item.Meta>
              <span className='location'>{`${jobData.city}, ${jobData.country}`}</span>
            </Item.Meta> : ''
          }
          {
            jobData.company ?
            <Item.Description>{jobData.company.name}</Item.Description> : ''
          }
        <Item.Extra>
          <Label content={remoteText} />
          <Label icon='money bill alternate outline' content={jobData.salary} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default JobItem;
