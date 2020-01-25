﻿import {CartPosition} from "./models";
import {observable} from "mobx";

const positions: CartPosition[] = [
    {
        id: "1",
        productName: "Хлеб",
        amount: 2,
        positionTotal: 10
    },
    {
        id: "2",
        productName: "Молоко",
        amount: 1,
        positionTotal: 140
    },
    {
        id: "3",
        productName: "Кефир",
        amount: 20,
        positionTotal: 702
    },
    {
        id: "4",
        productName: "Сметана",
        amount: 7,
        positionTotal: 55
    },
    {
        id: "5",
        productName: "Творог",
        amount: 6,
        positionTotal: 100
    }
];

class CartStore {
    @observable positions = positions;
}

const instance = new CartStore();
export default instance;