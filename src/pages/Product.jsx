import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
// import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <div>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">R {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
