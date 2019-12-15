import React, {useContext} from "react";
import {SessionContext} from './session_utils';
import { Button, Grid } from 'semantic-ui-react'

const LogoutHandler = () => {
  const {session, setSession} = useContext(SessionContext);
  const handleLogout = () => setSession({});

  return (
    <Grid columns={2}>
      <Grid.Column>
        <p> Your're logged in as {session.email}.</p>
      </Grid.Column>

      <Grid.Column>
        <Button onClick={handleLogout}>Logout</Button>
      </Grid.Column>
    </Grid>
  );
};

export default LogoutHandler;
