import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem, index) => {
          return <Product key={index} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
