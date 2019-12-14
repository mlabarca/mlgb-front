import React, {useContext} from "react";
import {SessionContext} from './session_utils';

const LogoutHandler = () => {
  const {session, setSession} = useContext(SessionContext);
  const handleLogout = () => setSession({});

  return (
    <div >
      <p> Your're logged in as {session.email}.</p>
      <button onClick={handleLogout}> LOGOUT </button>
    </div>
  );
};

export default LogoutHandler;
