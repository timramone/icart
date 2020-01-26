import React, { useCallback } from "react";
import { Button, Col, Row } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { CartPositionDto } from "./stores/cartStore";
import { observer } from "mobx-react-lite";
import rootStore from "./stores/rootStore";

interface CartPositionProps {
  position: CartPositionDto;
}

const CartPositionPresenter: React.FC<CartPositionProps> = ({
  position: { id, productName, amount, pricePerItem }
}) => {
  const {
    increasePositionAmount,
    decreasePositionAmount
  } = rootStore.cartStore;

  const increaseCurrent = useCallback(() => increasePositionAmount(id), [id]);
  const decreaseCurrent = useCallback(() => decreasePositionAmount(id), [id]);

  console.log(`Rerender for position ${id}`);

  return (
    <Row type="flex" key={id} gutter={[16, 10]}>
      <Col key="product" span={10}>
        {productName}
      </Col>
      <Col key="position-price" span={3}>
        {pricePerItem}
      </Col>
      <Col key="amount" span={2}>
        {amount}
      </Col>
      <Col key="controls" span={3}>
        <ButtonGroup>
          <Button type="primary" icon="plus" onClick={increaseCurrent} />
          <Button type="primary" icon="minus" onClick={decreaseCurrent} />
        </ButtonGroup>
      </Col>
      <Col key="position-total" span={2}>
        {amount * pricePerItem}
      </Col>
      <Col span={4} />
    </Row>
  );
};

export default observer(CartPositionPresenter);
