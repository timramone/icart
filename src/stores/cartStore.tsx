import {
  action,
  comparer,
  computed,
  observable,
  reaction,
  runInAction
} from "mobx";
import ProductStore, { Product } from "./productStore";
import guid from "uuid/v4";
import { Icon, notification } from "antd";
import React from "react";

export interface CartPosition {
  id: string;
  productId: string;
  amount: number;
  pricePerItem: number;
}

export interface CartPositionDto {
  id: string;
  productName: string;
  amount: number;
  pricePerItem: number;
}

class CartStore {
  @observable
  public readonly positionsMap: Map<string, CartPosition> = new Map<
    string,
    CartPosition
  >();

  constructor(readonly productStore: ProductStore) {
    const savedCartJSON = window.localStorage.getItem("icart-position-map");
    if (savedCartJSON != null) {
      const positions = JSON.parse(savedCartJSON) as CartPosition[];
      runInAction(() => {
        positions.forEach(p => {
          this.positionsMap.set(p.id, p);
        });
      });
    }

    reaction(
      () => JSON.stringify(this.positionsMap),
      positionsMap => {
        console.log("positions change");

        const positions = Array.from(this.positionsMap.values());
        const positionsJSON = JSON.stringify(positions);

        window.localStorage.setItem("icart-position-map", positionsJSON);

        notification.open({
          message: "Changes saved",
          description: "Hit F5 to refresh",
          icon: <Icon type="save" style={{ color: "#108ee9" }} />,
          duration: 3
        });
      },
      {
        delay: 2000
      }
    );
  }

  @computed
  public get total(): number {
    return Array.from(this.positionsMap.values())
      .map(p => p.pricePerItem * p.amount)
      .reduce((v1, v2) => v1 + v2, 0);
  }

  @action
  public addPosition = () => {
    const id = guid();

    const productIndex = random(this.productStore.products.size);
    const product: Product = Array.from(this.productStore.products.values())[
      productIndex
    ];
    const productId = product.id;

    const positionToAdd: CartPosition = {
      id,
      productId,
      pricePerItem: product.price,
      amount: 1
    };

    this.positionsMap.set(positionToAdd.id, positionToAdd);
  };

  @action
  public increasePositionAmount = (id: string) => {
    this.positionsMap.get(id)!.amount++;
  };

  @action
  public decreasePositionAmount = (id: string) => {
    const position = this.positionsMap.get(id);

    if (position == null) return;

    position.amount--;

    if (position.amount === 0) {
      this.positionsMap.delete(id);
    }
  };
}

const random = (max: number) => {
  return Math.floor(Math.random() * max);
};

export default CartStore;
