import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../../components/order-item";
import { getOrders } from "../../store/actions/order.actions";
import { styles } from "./styles";
import { useEffect } from "react";

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  const onDeleteOrder = () => {
    console.log("delete");
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
