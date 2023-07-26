import React from "react";
// import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
// import ListView from "./ListView";

const ProductList = () => {
  //   const { filter_products, grid_view } = useFilterContext();
  const filter_products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://www.simicart.com/blog/wp-content/uploads/kniveksperten.png",
      price: 10.99,
      category: "Category A",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://www.simicart.com/blog/wp-content/uploads/kniveksperten.png",
      price: 20.99,
      category: "Category B",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://www.simicart.com/blog/wp-content/uploads/kniveksperten.png",
      price: 43.99,
      category: "Category C",
    },
    {
      id: 4,
      name: "Product 4",
      image:
        "https://www.simicart.com/blog/wp-content/uploads/kniveksperten.png",
      price: 99.99,
      category: "Category D",
    },
    {
      id: 5,
      name: "Product 4",
      image:
        "https://preview.free3d.com/img/2014/12/1761845545204188412/qj6n56x1.jpg",
      price: 99.99,
      category: "Category D",
    },
    {
      id: 6,
      name: "Product 4",
      image:
        "https://preview.free3d.com/img/2014/12/1761845545204188412/qj6n56x1.jpg",
      price: 99.99,
      category: "Category D",
    },
  ];
  //   if (grid_view === true) {
  return <GridView products={filter_products} />;
  //   }

  //   if (grid_view === false) {
  //     return <ListView products={filter_products} />;
  //   }
};

export default ProductList;
