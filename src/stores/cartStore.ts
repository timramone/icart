import { action, computed, observable, runInAction } from "mobx";
import ProductStore, { Product } from "./productStore";
import guid from "uuid/v4";

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
  private readonly positionsMap: Map<string, CartPosition> = new Map<
    string,
    CartPosition
  >();

  constructor(readonly productStore: ProductStore) {}

  @computed
  public get positions(): CartPositionDto[] {
    return Array.from(this.positionsMap.values()).map(
      ({ pricePerItem, productId, id, amount }) => {
        const productName = this.productStore.products.get(productId)!.name;

        return {
          id,
          productName,
          pricePerItem,
          amount
        };
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
