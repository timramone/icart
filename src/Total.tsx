import React from "react";
import { Col, Row } from "antd";
import { observer } from "mobx-react-lite";
import rootStore from "./stores/rootStore";

const Total: React.FC = () => {
  return (
    <Row type="flex" align="bottom" gutter={[16, 20]}>
      <Col key="product" span={18} />
      <Col key="position-total" span={3}>
        Total: {rootStore.cartStore.total}
      </Col>
      <Col span={3} />
    </Row>
  );
};

export default observer(Total);
