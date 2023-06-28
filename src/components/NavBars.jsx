/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconCart from "../images/icon-cart.svg";
import ImageAvatar from "../images/image-avatar.png";
import { Space, Badge } from "antd";

const NavBars = () => {
  const state = useSelector((state) => {
    return state.carts;
  });
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="fixed-top  navbar-section"
        fluid="md"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Sneakers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/collections">
                Collections
              </Nav.Link>
              <Nav.Link as={Link} to="/men">
                Men
              </Nav.Link>
              <Nav.Link as={Link} to="/women">
                Women
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={state.count > 0 ? Link : undefined}
                to={state.count > 0 ? "/checkout" : undefined}
                className="d-flex me-lg-3 position-relative"
              >
                <img
                  src={iconCart}
                  alt="shopping cart"
                  className="align-self-center"
                />
                <Space size="middle">
                  {state.count > 0 && (
                    <Badge
                      count={state.count}
                      className="align-self-start px-2 position-absolute
                    text-white"
                      style={{
                        top: "-28px",
                        right: "20px",
                        backgroundColor: "hsl(26, 100%, 55%)",
                      }}
                    />
                  )}
                </Space>
              </Nav.Link>
              <Nav.Link to="#memes">
                <img className="w-25" src={ImageAvatar} alt="image-avatar" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBars;
