import React from "react";
import CartPositionPresenter from "./CartPosition";
import RootStore from "./stores/rootStore";
import { observer } from "mobx-react-lite";
import { List } from "antd";

const PositionList = () => {
  const positionIds = Array.from(RootStore.cartStore.positionsMap.keys());

  return (
    <List>
      {positionIds.map(id => (
        <CartPositionPresenter id={id} key={id} />
      ))}
    </List>
  );
};

export default observer(PositionList);
