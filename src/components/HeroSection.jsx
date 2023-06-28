/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ImageProduct1 from "../sneaker_images/herosectionImages/image-product-1-thumbnail.jpg";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import CartModal from "./CartModal";

import { increaseCart, decreaseCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import MobileScreenSlide from "./MobileScreenSlide";
import LargeScreenSlide from "./LargeScreenSlide";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const state = useSelector((state) => {
    return state.carts;
  });

  const iconStyle = {
    borderColor: "transparent",
    color: "orange",
    backgroundColor: "hsl(223, 64%, 98%)",
    _hover: {
      backgroundColor: "hsl(223, 64%, 98%)",
      color: "hsl(26, 100%, 55%)",
      width: "calc(100%/3)",
    },
  };

  const checkoutStyle = {
    backgroundColor: "hsl(26, 100%, 55%)",
    color: "hsl(0, 0%, 100%)",
    _hover: {
      backgroundColor: "hsl(26, 100%, 55%)",
      boxShadow: "lg",
    },
  };

  const countStyle = {
    borderInline: 0,
    backgroundColor: "hsl(223, 64%, 98%)",
    _hover: {
      backgroundColor: "hsl(223, 64%, 98%)",
      width: "calc(100%/4)",
    },
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseCart());
  };

  const handleIncrease = () => {
    dispatch(increaseCart());
  };

  const handleAddtoCart = () => {
    if (state.count > 0) {
      showModal();
    }
  };

  return (
    <>
      <Container className="mt-lg-5" style={{ maxWidth: 1080 }}>
        <Row>
          <Col lg={6}>
            <LargeScreenSlide />
            <MobileScreenSlide />
          </Col>

          <Col lg={6} className="p-5">
            <small className="fs-5 fw-bold" style={{ color: "orange" }}>
              Sneaker Company
            </small>
            <p className="fs-1 fw-bold">
              Fall Limited <br /> Sneakers
            </p>
            <p className="text-grey-50" style={{ width: "85%" }}>
              <small>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </small>
            </p>
            <br />
            <div className="my-3 d-flex justify-content-between d-lg-block">
              <div className="d-flex flex-wrap gap-2">
                <span className="fw-bold fs-5">$125.00</span>
                <small className="fw-bold rounded-2 px-2 align-self-center text-orange bg-orange-50">
                  50%
                </small>
              </div>
              <small className="d-block align-self-center text-decoration-line-through fw-semibold text-grey-30">
                $250.00
              </small>
            </div>
            <Space direction="vertical" className="d-md-flex gap-3">
              <Space
                wrap
                size="md"
                variant="outline"
                my={5}
                w={{ base: "full", lg: "45%" }}
              >
                <Button
                  aria-label="Decrease cart"
                  icon={<MinusOutlined style={iconStyle} />}
                  onClick={handleDecrease}
                />
                <Button style={countStyle}> {state.count}</Button>
                <Button
                  aria-label="Increase cart"
                  icon={<PlusOutlined style={iconStyle} />}
                  onClick={handleIncrease}
                />
              </Space>

              <Space wrap>
                <Button
                  style={checkoutStyle}
                  className="align-self-center"
                  px={10}
                  size={"md"}
                  w={{ base: "full", lg: "45%" }}
                  onClick={handleAddtoCart}
                >
                  {<ShoppingCartOutlined />}
                  <small className="ms-3">Add to Cart</small>
                </Button>
              </Space>
            </Space>
          </Col>
        </Row>
      </Container>

      <Modal
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        title={`${state.count} item(s) added to Cart`}
        footer={[
          <Button
            key="proceed"
            backgroundColor={"hsl(26, 100%, 55%)"}
            colorScheme="whiteAlpha"
            _hover={{ backgroundColor: "hsl(26, 100%, 55%)" }}
            as={Link}
            to="/checkout"
          >
            Proceed to Checkout
          </Button>,
        ]}
      >
        <CloseCircleOutlined />
        <hr />
        <CartModal productImage={ImageProduct1} />
      </Modal>
    </>
  );
};

export default HeroSection;
