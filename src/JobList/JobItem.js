import React from "react";
import { Item, Label } from 'semantic-ui-react'
import FavoriteButton from './FavoriteButton'

function JobItem({jobData, handleView}){
  const remoteText = jobData.remote ? 'Remote!' : 'In-office';

  return (
    <Item>
      <Item.Image size='tiny' src={jobData.logo_url} onClick={() => handleView(jobData)}/>
      <Item.Content verticalAlign='middle'>

        <Item.Header onClick={() => handleView(jobData)}>{jobData.title}</Item.Header>
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
          {
            jobData.salary ?
            <Label icon='money bill alternate outline' content={jobData.salary} /> : ''
          }
          <FavoriteButton jobData={jobData}/>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default JobItem;
