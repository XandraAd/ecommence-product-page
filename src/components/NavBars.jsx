/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import iconCart from '../images/icon-cart.svg';
import ImageAvatar from '../images/image-avatar.png';



const NavBars = () => {
  return (
    <>
     <Navbar collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fixed-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Sneakers</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" >
              <Link to="/collections">Collections</Link>
              <Nav.Link as={Link} to="/men">Men</Nav.Link>
              <Nav.Link as={Link} to="/women">Women</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
              </Nav>
              <Nav>
            <Nav.Link to="/add-to-cart">
                <img src={iconCart} alt="shopping cart" />
            </Nav.Link>
            <Nav.Link eventKey={2} to="#memes">
            <img className='w-25' src={ImageAvatar} alt="image-avatar" />
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBars