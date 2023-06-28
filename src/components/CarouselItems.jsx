/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ConverseStar from "../sneaker_images/carouselImages/converse-run-star-black.png";
import AdidasCampusGreen from "../sneaker_images/carouselImages/adidas-campus-green.png";
import NikeJordon from "../sneaker_images/carouselImages/nike-jordan-university-blue.png";

const CarouselItems = () => {
  const carouselItems = [
    {
      src: AdidasCampusGreen,
      alt: "First slide",
      caption: "Adidas Campus Green",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: ConverseStar,
      alt: "Second slide",
      caption: "Converse Chunk AllStar",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: NikeJordon,
      alt: "Third slide",
      caption: "Nike Jordon University Blue",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <>
      <Container style={{ maxWidth: 600 }} fluid>
        <Row>
          <Col className="" style={{ position: "relative" }}>
            <Carousel>
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.alt}
                  />
                  <br />
                  <Carousel.Caption
                    className="carouselcaption"
                    style={{ position: "absolute" }}
                  >
                    <h3 className="itemCaption">{item.caption}</h3>
                    <p className="itemDesc">{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarouselItems;
