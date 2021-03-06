﻿import React from "react";
import { Button, Col, Row } from "antd";
import rootStore from "./stores/rootStore";

const style: React.CSSProperties = {
  margin: "10px 40px"
};

const AddProduct = () => {
  return (
    <Row type="flex" gutter={[16, 16]}>
      <Col span={1} />
      <Col span={3}>
        <Button
          onClick={rootStore.cartStore.addPosition}
          type="primary"
          shape="circle"
          icon="plus"
          size="large"
        />
      </Col>
    </Row>
  );
};

export default AddProduct;
