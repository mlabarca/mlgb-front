import React, {useState, useContext} from "react";
import { SessionContext } from '../sessions/session_utils';
import { Icon, Popup } from 'semantic-ui-react';
import axios from 'axios';

function FavoriteButton({jobData}){
  const {session} = useContext(SessionContext);
  const loggedIn = session && session.email ? true : false;
  const toolTip = loggedIn ? 'Mark as Favorite' : 'Log in to mark as favorite!';
  const [favorite, setFavorite] = useState(jobData.favorite);
  const iconName = favorite ? 'heart' : 'heart outline';
  const baseUrl = 'https://mighty-fortress-18011.herokuapp.com/favorites';

  const handleClick = () => {
    const params = { job_id: jobData.id, email: session.email };
    favorite ? unMarkFavorite(params) : markFavorite(params);
  }

  // TODO: Move these requests to a separate place.
  const markFavorite = (params) =>{
    const url = baseUrl + '/create';

    axios.post(url, params)
    .then(json => {
      setFavorite(true);
    })
    .catch(error => console.log(error));
  }

  const unMarkFavorite = (params) =>{
    const url = baseUrl + '/delete';

    axios.delete(url, params)
    .then(json => {
      setFavorite(false);
    })
    .catch(error => console.log(error));
  }

  return (
     <Popup
       content={toolTip}
       trigger={<Icon name={iconName} onClick={handleClick} size='large' disabled={!loggedIn} />}
     />
  );
}

export default FavoriteButton;
