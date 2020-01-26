import React from "react";
import "./App.css";
import { Divider, Layout } from "antd";
import Total from "./Total";
import PositionList from "./PositionList";
import AddProduct from "./AddProduct";

const cartStyle: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 100,
  width: 800,
  minHeight: 500,
  backgroundColor: "#F5F5F5",
  padding: 24
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
      <Divider />
      <Total />
    </div>
  );
};

export default App;
