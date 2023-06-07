/* eslint-disable no-unused-vars */
import React from 'react'
import{ Container, Row, Col, Figure, Card } from 'react-bootstrap';


const HeroSection = () => {
  return (
    <>
   <Container>
      <Row>
        <Col md={6}>
            <Col>
            <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            </Card></Col>
            <Col> 
            <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      
    </Figure>
            </Col>
        </Col>
        <Col md={6}>
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>Sneaker Company</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Fall Limited <br />Edition</b></Card.Subtitle>
        <Card.Text>
        These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.
        <br />
        <br />
        </Card.Text>
        <Card.Text> $120</Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
</Col>
      </Row>
      </Container>
    </>
  )
}

export default HeroSection