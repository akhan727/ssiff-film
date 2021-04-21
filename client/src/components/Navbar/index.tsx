import React from 'react';
import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default () => {
  return (
    <Navbar bg="dark" sticky="top">
      <Navbar.Brand>
        <Link href="/">
          <a>SSIFF</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>           
        
        <Nav>
          <NavDropdown title="FESTIVALS &amp; EVENTS" className="navigation__drop__title" id="fest-events">
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

          <NavDropdown title="SUPPORT" className="navigation__drop__title" id="support">
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

          <NavDropdown title="ABOUT" className="navigation__drop__title" id="about">
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