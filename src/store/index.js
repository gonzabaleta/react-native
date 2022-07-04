import { combineReducers, createStore } from "redux";

import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/product.reducer";

const RootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

export default createStore(RootReducer);
