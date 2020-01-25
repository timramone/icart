import React from "react";
import { Button, Col, Row } from "antd";
import { CartPosition } from "./models";
import ButtonGroup from "antd/lib/button/button-group";

interface CartPositionProps {
  position: CartPosition;
}

const CartPositionPresenter: React.FC<CartPositionProps> = ({
  position: { id, productName, amount, positionTotal }
}) => {
  return (
    <Row type="flex" key={id} gutter={[16, 10]}>
      <Col key="product" span={10}>
        {productName}
      </Col>
      <Col key="amount" span={2}>
        {amount}
      </Col>
      <Col key="controls" span={3}>
        <ButtonGroup>
          <Button type="primary" icon="plus" />
          <Button type="primary" icon="minus" />
        </ButtonGroup>
      </Col>
      <Col key="position-total" span={3}>
        {positionTotal}
      </Col>
      <Col span={6} />
    </Row>
  );
};

export default CartPositionPresenter;
