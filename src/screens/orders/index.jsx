import { FlatList, Text, View } from "react-native";
import { deleteOrder, getOrders } from "../../store/actions/order.actions";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../../components/order-item";
import { styles } from "./styles";
import { useEffect } from "react";

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Orders Screen</Text>
      <View style={styles.orderList}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(order) => order.id}
        />
      </View>
    </View>
  );
}
