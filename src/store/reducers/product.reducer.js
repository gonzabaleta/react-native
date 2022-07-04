import { productTypes } from "../types/product.types";
import { products } from "../../data/products";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productTypes;

const initialState = {
  products,
  filteredProducts: [],
  selected: null,
};

const productReducer = (state = initialState, action) => {
  switch (state.action) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((prod) => prod.id === action.productId),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (prod) => prod.categoryId === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
