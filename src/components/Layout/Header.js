import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
  return (
    <Navbar expand="md" collapseOnSelect id ="navbar">
  <Container>
    {/* <Navbar.Brand href="#home"> */}
    <LinkContainer to = "/">
      <Nav.Link>


        <img src={logo} alt="logo" width= "80px" />
      </Nav.Link>
    {/* </Navbar.Brand> */}
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fw-bolder">
        <LinkContainer to = "/skills">
          
        <Nav.Link>Skills</Nav.Link>
        </LinkContainer>
        <LinkContainer to = "/projects">

        <Nav.Link>Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer to = "/about-me">
          
        <Nav.Link>About me</Nav.Link>
        </LinkContainer>
        <LinkContainer to = "/contact">
        </LinkContainer>
        <Nav.Link>Contact</Nav.Link>
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
