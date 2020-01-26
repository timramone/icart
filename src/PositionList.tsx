import React from "react";
import CartPositionPresenter from "./CartPosition";
import RootStore from "./stores/rootStore";
import { observer } from "mobx-react-lite";

const PositionList = () => {
  const positionIds = Array.from(RootStore.cartStore.positionsMap.keys());

  return (
    <div>
      {positionIds.map(id => {
        return <CartPositionPresenter id={id} key={id} />;
      })}
    </div>
  );
};

export default observer(PositionList);
