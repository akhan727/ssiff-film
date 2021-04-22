import React, { useState } from 'react';
import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  
  const [show1, setShow1] = useState(false);
  const showDropdown1 = () => {setShow1(!show1);}
  const hideDropdown1 = () => {setShow1(false);}

  const [show2, setShow2] = useState(false);
  const showDropdown2 = () => {setShow2(!show2);}
  const hideDropdown2 = () => {setShow2(false);}

  const [show3, setShow3] = useState(false);
  const showDropdown3 = () => {setShow3(!show3);}
  const hideDropdown3 = () => {setShow3(false);}
  
  return (
    <Navbar bg="dark" expand="xl" sticky="top">
      <Navbar.Brand>
        <Link href="/">
          <a>SSIFF</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>           
        
        <Nav>
          <NavDropdown 
          title="FESTIVALS x EVENTS" 
          className="navigation__drop__title" 
          id="fest-events"
          show={show1}
          onMouseEnter={showDropdown1} 
          onMouseLeave={hideDropdown1}
          >
            <NavDropdown.Item>
              <a>SSIFF21 SPRING FESTIVAL</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a>SSIFF21 FALL FESTIVAL</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a>HOW TO SSIFF</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a>SSIFF MERCH</a>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown 
          title="SUPPORT" 
          className="navigation__drop__title" 
          id="support"
          show={show2}
          onMouseEnter={showDropdown2} 
          onMouseLeave={hideDropdown2}
          >
            <NavDropdown.Item>
              <a>SSIFF MEMBERSHIP</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a>DONATE TO SSIFF</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a>VOLUNTEER AT SSIFF</a>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown 
          title="ABOUT" 
          className="navigation__drop__title" 
          id="about"
          show={show3}
          onMouseEnter={showDropdown3} 
          onMouseLeave={hideDropdown3}
          >
            <NavDropdown.Item>
              <a>ABOUT SSIFF</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a>CONTACT SSIFF</a>
            </NavDropdown.Item>
          </NavDropdown> 
        </Nav>

        <Nav className="navbar-nav ml-auto">
          <Nav.Item className="navigation__user__item">
            <Nav.Link href="/auth/signin">SIGN IN</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navigation__user__button">
            <Nav.Link href="/auth/signup">SIGN UP</Nav.Link>
          </Nav.Item>

          <Nav.Item className="navigation__user__item">
            <Nav.Link href="/">PROFILE</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navigation__user__button">
            <Nav.Link href="/auth/signout">SIGN OUT</Nav.Link>
          </Nav.Item>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;