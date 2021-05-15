import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import Image from 'next/image'

export const DonationForm: React.FC = ({}) => {
  
  return (
    <>
      <div className="donation__form">
        <Form noValidate>
          
          <h1 className="donation__title">THANK YOU !</h1>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="fname" 
                className="donation__control"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="lname" 
                className="donation__control"
              />
            </Form.Group>
          </Form.Row>


          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control 
              type="cname" 
              className="donation__control"
            />
          </Form.Group>
          
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                className="donation__control"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                type="phone" 
                className="donation__control"
                placeholder="XXX-XXX-XXXX"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control 
              type="address1" 
              className="donation__control"
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address 2</Form.Label>
            <Form.Control 
              type="address2" 
              className="donation__control"
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>AL</option>
                <option>AK</option>
                <option>AS</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>DC</option>
                <option>FL</option>
                <option>GA</option>
                <option>GU</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>MP</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>PR</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>VI</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control 
              type="comments" 
              className="donation__control" 
              as="textarea" 
              rows={4} 
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Donation Amount</Form.Label>
            <Form.Control 
              type="amount" 
              className="donation__control"
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              className="donation__checkbox"
              id="inlineFormCheck"
              label="I would like to remain anonymous."
              custom
            />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>

        </Form>
      </div>
      
      <div className="animated-gif">
        <Image src="/rainbow-sludge.gif" alt="rainbow-sludge-gif" width="705" height="566"/>
      </div>
    </>
  );
}

export default DonationForm