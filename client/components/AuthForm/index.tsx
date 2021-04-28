import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'next/image';

interface Props {
  type: 'Sign In' | 'Sign Up';
  email: string;
  setEmail(email: string): void;
  password: string;
  setPassword(password: string): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void>;
  errors: JSX.Element;
}

export const AuthForm: React.FC<Props> = ({
  email,
  password,
  setEmail,
  setPassword,
  type,
  onSubmit,
  errors
}) => {
  console.log('!!!!!!!!!!!!!!! errors: ', {errors});
  return (
    <>
      <div className="auth-form">
        <Form onSubmit={onSubmit} noValidate>
          <h1 className="form-type-title">{type}</h1>
          <div className="animated-gif">
            <Image src="/eye.gif" alt="eye-gif" width="256" height="232"/>
          </div>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Form.Text className="form-error-text">
              {errors}
            </Form.Text>
          </Form.Group>
          
          

          <Button variant="primary" type="submit">{type}</Button>

        </Form>
      </div>
      
      <div className="animated-gif">
        <Image src="/rainbow-sludge.gif" alt="rainbow-sludge-gif" width="405" height="325"/>
      </div>
    </>
  );
};

export default AuthForm;
