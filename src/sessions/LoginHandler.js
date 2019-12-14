import React, {useState, useContext} from "react";
import {SessionContext} from './session_utils';

const LoginHandler = () => {
  const {setSession} = useContext(SessionContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSession({ email });
  };

  return (
    <div >
      <p>Login to store/see your favorites! </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginHandler;
