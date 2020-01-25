import React from "react";
import "./App.css";
import { Layout } from "antd";
import Total from "./Total";
import PositionList from "./PositionList";
import AddProduct from "./AddProduct";

const cartStyle: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 100,
  padding: 5,
  width: 800,
  border: "black 1px solid",
  minHeight: 500
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Cart />
      </Layout>
    </div>
  );
};

const Cart: React.FC = () => {
  return (
    <div style={cartStyle}>
      <PositionList />
      <AddProduct />
      <Total total={100500} />
    </div>
  );
};

export default App;
