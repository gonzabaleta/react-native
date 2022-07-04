import { productTypes } from "../types/product.types";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});
