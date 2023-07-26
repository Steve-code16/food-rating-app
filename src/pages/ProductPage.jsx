// import styled from "styled-components";
// import FilterSection from "./components/FilterSection";
import ProductList from "./ProductList";
// import Sort from "./components/Sort";
// import { useFilterContext } from "./context/filter_context";

const ProductPage = () => {
  return (
    <div>
      <div className="container grid grid-filter-column">
        <section className="product-view--sort">
          {/* <div className="sort-filter">
            <Sort />
          </div> */}
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
