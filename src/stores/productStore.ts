import { observable, runInAction } from "mobx";

export interface Product {
  id: string;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: "101",
    name: "Хлеб",
    price: 10
  },
  {
    id: "102",
    name: "Творог",
    price: 20
  },
  {
    id: "103",
    name: "Молоко",
    price: 30
  },
  {
    id: "104",
    name: "Кефир",
    price: 40
  },
  {
    id: "105",
    name: "Сливки",
    price: 50
  }
];

class ProductStore {
  @observable public readonly products: Map<string, Product> = new Map<
    string,
    Product
  >();

  constructor() {
    runInAction(() => {
      products.forEach(p => {
        this.products.set(p.id, p);
      });
    });
  }
}

export default ProductStore;
