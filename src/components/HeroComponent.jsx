/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Image, Button, Figure, Container, Row, Col } from "react-bootstrap";
import { useDispatch} from 'react-redux';
import { setBrandImages, setFigureImages } from '../slices/brandsSlice';
import SalesImage from "../sneaker_images/sales.jpg";
import BermudaWonder from "../sneaker_images/bermuda-wonder-white.png";
import Adidas from "../sneaker_images/adidas.jpg";
import NewBalance1 from "../sneaker_images/new_balance1.jpg";
import AdidasGreen from "../sneaker_images/adidas_green.jpg";
import AdidasBlue from "../sneaker_images/adidas_blue.jpg";
import Vans from "../sneaker_images/vans1.jpg";
import Oasics2 from "../sneaker_images/oasics2.jpg";
import Nike from "../sneaker_images/nike.jpg";
import Reebok1 from "../sneaker_images/reebok1.jpg";

const HeroComponent = () => {
  const dispatch = useDispatch();


  
useEffect(() => {
    // BrandImages is an array containing the image sources for brands,
    // and figureImages is an array containing the image sources for figures
    const brandImages = [Nike, Adidas, AdidasBlue, Reebok1];
    const figureImages = [SalesImage, AdidasGreen, Vans, NewBalance1, Oasics2];
    dispatch(setBrandImages(brandImages));
    dispatch(setFigureImages(figureImages));
  }, [dispatch]);

  const images = [
    { src: SalesImage },
    { src: AdidasGreen },
    { src: Vans },
    { src: NewBalance1 },
    { src: Oasics2 }
  ];

  const brands = [
    { src: Nike },
    { src: Adidas },
    { src: AdidasBlue },
    { src: Reebok1 },
   ]

  return (
    <>
      <Container style={{ maxWidth: 600 }} fluid>
        <Row>
          <Col
            className=" herocomponent-main d-flex justify-content-center"
            style={{ position: "relative" }}
          >
            <Image style={{ width: "60vw" }} src={BermudaWonder} fluid />
            <Button
              style={{ position: "absolute", top: "28rem", left: "1rem" }}
            >
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
      <p className="d-flex justify-content-center mt-2 fs-5 fw-bold" style={{color:'orange'}}>Most Popular</p>
      <Figure className="d-flex gap-4">
        {images.map((image, index) => (
          <Figure.Image
            key={index}
            width={171}
            height={180}
            alt="171x180"
            src={image.src}
          />
        ))}
      </Figure>

     
      <Container>
        <h2 className="d-flex justify-content-center mt-2 fs-5 fw-bold" style={{color:'orange'}}>Brands</h2>
        <Row className="brands_container">
          <Col md={12} className=" border featuredSneakers mt-5 p-2 gap-4">
            {brands.map((brand,index)=> {
                return( 
                <Image className="brandImg"
                    key={index} 
                    src={brand.src} 
                    roundedCircle />)
               
            })}
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroComponent;

