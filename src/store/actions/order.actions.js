import { URL_API } from "../../constants/database/firebase";
import { orderTypes } from "../types/order.types";

const { GET_ORDERS } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}order.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);

      const orders = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });

      dispatch({
        type: GET_ORDERS,
        payload: orders,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
