import React from "react";
import { CartPosition } from "./models";
import CartPositionPresenter from "./CartPosition";
import CartStore from "./CartStore";
import { observer } from "mobx-react-lite";

const PositionList = () => {
  return (
    <div>
      {CartStore.positions.map(p => {
        return <CartPositionPresenter position={p} key={p.id} />;
      })}
    </div>
  );
};

export default observer(PositionList);
