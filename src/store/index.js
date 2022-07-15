import { applyMiddleware, combineReducers, createStore } from "redux";

import cartReducer from "./reducers/cart.reducer";
import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/product.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
