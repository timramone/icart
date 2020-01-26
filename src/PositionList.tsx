import React from "react";
import CartPositionPresenter from "./CartPosition";
import RootStore from "./stores/rootStore";
import { observer } from "mobx-react-lite";

const PositionList = () => {
  const positions = RootStore.cartStore.positions;

  return (
    <div>
      {positions.map(p => {
        return <CartPositionPresenter position={p} key={p.id} />;
      })}
    </div>
  );
};

export default observer(PositionList);
