import React, { useState } from 'react';
import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

interface Props extends CurrentUserResponse {}

export const Navigation: React.FC<Props> = ({ currentUser }) => {
  
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
        <Link href="/" passHref><Nav.Link >SSIFF</Nav.Link></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>           
        
        {!currentUser && (
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
                <Link href="/" passHref><Nav.Link >SSIFF21 SPRING FESTIVAL</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/" passHref><Nav.Link >SSIFF21 FALL FESTIVAL</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/" passHref><Nav.Link >HOW TO SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/" passHref><Nav.Link >SSIFF MERCH</Nav.Link></Link>
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
                <Link href="/" passHref><Nav.Link >SSIFF MEMBERSHIP</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/" passHref><Nav.Link >DONATE TO SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/" passHref><Nav.Link >VOLUNTEER AT SSIFF</Nav.Link></Link>
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
                <Link href="/" passHref><Nav.Link >ABOUT SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/" passHref><Nav.Link >CONTACT SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
            </NavDropdown> 
          </Nav>
        )}
        {!currentUser && (
          <Nav className="navbar-nav ml-auto">
            <Nav.Item className="navigation__user__item">
              <Link href="/" passHref><Nav.Link >PROFILE</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item className="navigation__user__button">
              <Link href="/auth/signout" passHref><Nav.Link >SIGN OUT</Nav.Link></Link>
            </Nav.Item>
          </Nav>
        )}
        {currentUser && (
          <Nav className="navbar-nav ml-auto">
            <Nav.Item className="navigation__user__item">
              <Link href="/auth/signin" passHref><Nav.Link >SIGN IN</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item className="navigation__user__button">
              <Link href="/auth/signup" passHref><Nav.Link >SIGN UP</Nav.Link></Link>
            </Nav.Item>
          </Nav>
        )}

      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;