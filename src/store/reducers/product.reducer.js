import { productTypes } from "../types/product.types";
import { products } from "../../data/products";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productTypes;

const initialState = {
  products,
  filteredProducts: [],
  selected: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((prod) => prod.id === action.productId),
      };
    case FILTER_PRODUCTS:
      const filteredProducts = state.products.filter(
        (prod) => prod.categoryId === action.categoryId
      );

      console.log(filteredProducts);

      return {
        ...state,
        filteredProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
