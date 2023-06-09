/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import{ Container, Row, Col, Figure, Card } from 'react-bootstrap';
import Counter from './Counter';
import ImageProductOne from '../images/image-product-1.jpg'
import ImageProductTwo from '../images/image-product-2.jpg'
import ImageProductThree from '../images/image-product-3.jpg'
import ImageProductFour from '../images/image-product-4.jpg'
import ImageProduct1 from '../images/image-product-1-thumbnail.jpg'
import ImageProduct2 from '../images/image-product-2-thumbnail.jpg'
import ImageProduct3 from '../images/image-product-3-thumbnail.jpg'
import ImageProduct4 from '../images/image-product-4-thumbnail.jpg'



const HeroSection = () => {
     const [displayedImage, setDisplayedImage] = useState('');
      
        const handleClick = (image) => {
          setDisplayedImage(image);
        };

  return (
    <>
   <Container className='d-flex flex-column justify-content-center' style={{minHeight:'150vh'}}>
      <Row>
        <Col md={6}>
            <Card >
            <Card.Img variant="top" src={displayedImage||ImageProductOne} />
            </Card>
            <br />
            <Figure className='d-flex gap-4 gap-lg-3'>
      <Figure.Image
        width={100}
        height={70}
        alt="Thumbnail 1"
                src={ImageProduct1}
                onClick={() => handleClick(ImageProductOne)}
      />
      <Figure.Image
        width={100}
        height={70}
        alt="Thumbnail 2"
        src={ImageProduct2}
        onClick={() => handleClick(ImageProductTwo)}
      />
      <Figure.Image
        width={100}
        height={70}
        alt="Thumbnail 3"
        src={ImageProduct3}
        onClick={() => handleClick(ImageProductThree)}
      />
      <Figure.Image
        width={100}
        height={70}
        alt="Thumbnail 4"
        src={ImageProduct4}
        onClick={() => handleClick(ImageProductFour)}
      />
      </Figure>
      </Col>
        
        <Col md={6}>
    <Card style={{ width: '30rem', height:'92vh'}}>
      <Card.Body>
        <Card.Title className="text-uppercase f-10px">Sneaker Company</Card.Title>

        <Card.Subtitle className="text-bold fw-20 mb-1 "><b>Fall Limited <br />Sneakers</b></Card.Subtitle>
        <Card.Text className="mt-5">
        These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.
        <br />
        <br />
        </Card.Text>
        <Card.Text> $120</Card.Text>
        <Counter/>
      </Card.Body>
    </Card>
</Col>
      </Row>
      </Container>
    </>
  )
}

export default HeroSection