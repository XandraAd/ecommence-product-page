/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
//import {iconCart} from '../images/icon-cart.svg';

const NavBars = () => {
  return (
    <>
     <Navbar collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="#home">Sneakers</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" >
              <Nav.Link href="#home">Collections</Nav.Link>
              <Nav.Link href="#link">Men</Nav.Link>
              <Nav.Link href="#link">Women</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
              <Nav>
            <Nav.Link href="#deets">
                <img src="" alt="shopping cart" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <img src="" alt="image-avatar" />
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBars