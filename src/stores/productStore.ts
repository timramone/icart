import { observable, runInAction } from "mobx";

export interface Product {
  id: string;
  name: string;
  price: number;
  categoryName: string;
  image: string;
}

const products: Product[] = [
  {
    id: "101",
    name: "Хлеб",
    price: 10,
    categoryName: "Хлебобулочные изделия",
    image: "https://cdn.icon-icons.com/icons2/1447/PNG/128/32371bread_98903.png"
  },
  {
    id: "102",
    name: "Творог",
    price: 20,
    categoryName: "Молочная продукция",
    image:
      "https://images.ru.prom.st/496895728_w128_h128_tvorog-18-fermerskij.jpg"
  },
  {
    id: "103",
    name: "Молоко",
    price: 30,
    categoryName: "Молочная продукция",
    image: "http://pngimg.com/uploads/milk/milk_PNG12700.png"
  },
  {
    id: "104",
    name: "Шуруповёрт",
    price: 40,
    categoryName: "Строительная техника",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_128,h_128,c_pad,b_white,d_photoiscoming.png/LMCode/82198049.png"
  },
  {
    id: "105",
    name: "Корм для енота",
    price: 50,
    categoryName: "Корма для животных",
    image: "https://img.is-animal.ru/thumb/7b/245744-0.png"
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
