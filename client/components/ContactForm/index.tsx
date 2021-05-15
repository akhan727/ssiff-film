import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Image from 'next/image'

export const ContactForm: React.FC = ({}) => {
  
  return (
    <>
      <div className="contact__form">
        <Form noValidate>
          
          <h1 className="contact__title">CONTACT US</h1>
          
          <div className="animated-gif__custom">
            <Image src="/animated-mail.gif" alt="mail-gif" width="368" height="205"/>
          </div>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="name" 
              className="contact__control"
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              className="contact__control"
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control 
              type="message" 
              className="contact__control" 
              as="textarea" 
              rows={4} 
            />
          </Form.Group>

          <Button variant="primary" type="submit">Send</Button>

        </Form>
      </div>
      
      <div className="animated-gif">
        <Image src="/rainbow-sludge.gif" alt="rainbow-sludge-gif" width="405" height="325"/>
      </div>
    </>
  );
}

export default ContactForm