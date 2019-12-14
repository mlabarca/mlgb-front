import React, {useContext} from "react";
import {SessionContext} from './session_utils';
import LogoutHandler from './LogOutHandler'
import LoginHandler from './LoginHandler'

const UserArea = () => {
  const {session} = useContext(SessionContext);

  return (
    <div>
      {
        session.email ? <LogoutHandler/> : <LoginHandler/>
      }
    </div>
  );
};

export default UserArea;

