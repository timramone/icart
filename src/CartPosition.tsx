import React, { useCallback } from "react";
import { Avatar, Button, Col, List, Row } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { observer } from "mobx-react-lite";
import rootStore from "./stores/rootStore";

interface CartPositionProps {
  id: string;
}

const CartPositionPresenter: React.FC<CartPositionProps> = ({ id }) => {
  const {
    increasePositionAmount,
    decreasePositionAmount
  } = rootStore.cartStore;

  const increaseCurrent = useCallback(() => increasePositionAmount(id), [id]);
  const decreaseCurrent = useCallback(() => decreasePositionAmount(id), [id]);

  console.log(`Rerender for position ${id}`);

  const {
    productId,
    amount,
    pricePerItem
  } = rootStore.cartStore.positionsMap.get(id)!;
  const { name, categoryName, image } = rootStore.productStore.products.get(
    productId
  )!;

  return (
    <List.Item>
      <Row type="flex" justify="start" style={{ width: "100%" }}>
        <Col key="main" span={13}>
          <List.Item.Meta
            avatar={<Avatar src={image} />}
            title={name}
            description={categoryName}
          />
        </Col>
        <Col key="position-price" span={2}>
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
        <Col span={2} />
      </Row>
    </List.Item>
  );
};

export default observer(CartPositionPresenter);
