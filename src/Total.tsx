import React from "react";
import { Col, Row } from "antd";

interface Props {
  total: number;
}

const Total: React.FC<Props> = ({ total }) => {
  return (
    <Row type="flex" align="bottom" gutter={[16, 20]}>
      <Col key="product" span={15} />
      <Col key="position-total" span={3}>
        {total}
      </Col>
      <Col span={6} />
    </Row>
  );
};

export default Total;
