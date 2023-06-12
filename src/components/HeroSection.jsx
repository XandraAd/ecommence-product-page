/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Figure, Button, Image } from "react-bootstrap";
import Counter from "./Counter";
import ImageProductOne from "../images/image-product-1.jpg";
import ImageProductTwo from "../images/image-product-2.jpg";
import ImageProductThree from "../images/image-product-3.jpg";
import ImageProductFour from "../images/image-product-4.jpg";
import ImageProduct1 from "../images/image-product-1-thumbnail.jpg";
import ImageProduct2 from "../images/image-product-2-thumbnail.jpg";
import ImageProduct3 from "../images/image-product-3-thumbnail.jpg";
import ImageProduct4 from "../images/image-product-4-thumbnail.jpg";

const HeroSection = () => {
  const [displayedImage, setDisplayedImage] = useState("");

  const thumbnails = [
    { src: ImageProduct1, alt: "Thumbnail 1", mainImage: ImageProductOne },
    { src: ImageProduct2, alt: "Thumbnail 2", mainImage: ImageProductTwo },
    { src: ImageProduct3, alt: "Thumbnail 3", mainImage: ImageProductThree },
    { src: ImageProduct4, alt: "Thumbnail 4", mainImage: ImageProductFour }
  ];

  const handleClick = (image) => {
    setDisplayedImage(image);
  };

  return (
    <>
      <Container style={{ maxWidth: 1080 }}>
        <Row className="border">
          <Col md={6}>
            <Image
              variant="top"
              src={displayedImage || ImageProductOne}
              style={{ width: "40vw" }}
              className="rounded-5"
            />

            <br />
            <Figure className="d-flex gap-4 gap-lg-3 mt-5">
              {thumbnails.map((thumbnail, index) => (
                <Figure.Image
                  key={index}
                  className="rounded-4"
                  width={95}
                  alt={thumbnail.alt}
                  src={thumbnail.src}
                  onClick={() => handleClick(thumbnail.mainImage)}
                />
              ))}
            </Figure>
          </Col>

          <Col md={6} className="p-5">
            <small className='fs-5 fw-bold' style={{color:'orange'}}>Sneaker Company</small>
            <p className="fs-1 fw-bold">
              Fall Limited <br /> Sneakers
            </p>
            <p>
              These low-profile sneakers are your perfect casual wear
              companion.Featuring a durable rubber outer sole, theyll withstand
              everything the weather can offer.
            </p>
            <br />
            <h4 className="fw-bold">$120</h4>
            <Button variant='secondary' style={{}}>50%</Button>
            <Counter className='m-5'/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;

