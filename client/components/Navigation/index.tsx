import React, { useState } from 'react'
import Link from 'next/link'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

interface Props extends CurrentUserResponse {}

export const Navigation: React.FC<Props> = ({ currentUser }) => {
  
  if (!currentUser) {
    console.log('%%%%%NAVIGATION%%%%% !currentUser');
  } else {
    console.log('%%%%%NAVIGATION%%%%% currentUser', currentUser);
  }

  const [show1, setShow1] = useState(false);
  const showDropdown1 = () => {setShow1(!show1);}
  const hideDropdown1 = () => {setShow1(false);}

  const [show2, setShow2] = useState(false);
  const showDropdown2 = () => {setShow2(!show2);}
  const hideDropdown2 = () => {setShow2(false);}

  const [show3, setShow3] = useState(false);
  const showDropdown3 = () => {setShow3(!show3);}
  const hideDropdown3 = () => {setShow3(false);}

  const [show4, setShow4] = useState(false);
  const showDropdown4 = () => {setShow4(!show4);}
  const hideDropdown4 = () => {setShow4(false);}
  
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand>
        <Link href="/" passHref><Nav.Link >SSIFF</Nav.Link></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>           
        
        {currentUser && (
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
                <Link href="/festevents/spring" passHref><Nav.Link >SSIFF21 SPRING FESTIVAL</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/festevents/fall" passHref><Nav.Link >SSIFF21 FALL FESTIVAL</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/festevents/how" passHref><Nav.Link >HOW TO SSIFF</Nav.Link></Link>
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
                <Link href="/support/membership" passHref><Nav.Link >SSIFF MEMBERSHIP</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/support/merch" passHref><Nav.Link >SSIFF MERCH</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/support/donate" passHref><Nav.Link >DONATE TO SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/support/volunteer" passHref><Nav.Link >VOLUNTEER AT SSIFF</Nav.Link></Link>
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
                <Link href="/about" passHref><Nav.Link >ABOUT SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/about/contact" passHref><Nav.Link >CONTACT SSIFF</Nav.Link></Link>
              </NavDropdown.Item>
            </NavDropdown> 
          </Nav>
        )}
        {currentUser && (
          <Nav className="navbar-nav ml-auto">
            <NavDropdown 
            title={currentUser.email.match(/^.+(?=@)/)![0]}
            className="navigation__drop__title__profile" 
            id="profile"
            alignRight
            show={show4}
            onMouseEnter={showDropdown4} 
            onMouseLeave={hideDropdown4}
            >
              <NavDropdown.Item>
                <Link href="/profile" passHref><Nav.Link >PROFILE SETTINGS</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/orders" passHref><Nav.Link >MY ORDERS</Nav.Link></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/auth/signout" passHref><Nav.Link >SIGN OUT</Nav.Link></Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="navigation__drop__title">
              
              <Link href="/" passHref>
                <Nav.Link >CART 0</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        )}
        {!currentUser && (
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
}

export default Navigation