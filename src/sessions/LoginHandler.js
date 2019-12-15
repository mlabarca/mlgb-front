import React, {useState, useContext} from "react";
import {SessionContext} from './session_utils';
import { Icon, Input, Form, Button } from 'semantic-ui-react'

const LoginHandler = () => {
  const {setSession} = useContext(SessionContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSession({ email });
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Field inline>
          <label>Email</label>
          <Input type='email' onChange={e => setEmail(e.target.value)} iconPosition='left' placeholder='Login to store your favs!' >
            <Icon name='at' />
            <input />
          </Input>
        </Form.Field>
        <Button type='submit'>Sign up!</Button>
      </Form.Group>
    </Form>

  );
};

export default LoginHandler;
