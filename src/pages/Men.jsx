/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Men = () => {
  return (
    <>
      <h3 className="mens-collections">Mens Collection</h3>
      <Card
        hoverable
        style={{
          width: 200,
        }}
        cover={
          <img
            alt="example"
            src="
    https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
};

export default Men;
