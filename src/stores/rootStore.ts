import ProductStore from "./productStore";
// @ts-ignore
import CartStore from "./cartStore";
import { configure } from "mobx";

configure({ enforceActions: "always" });

class RootStore {
  readonly productStore: ProductStore;
  readonly cartStore: CartStore;

  constructor() {
    this.productStore = new ProductStore();
    this.cartStore = new CartStore(this.productStore);
  }
}

const rootStore = new RootStore();
export default rootStore;
