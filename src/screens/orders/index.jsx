import { FlatList, Text, View } from "react-native";

import { orders } from "../../data/orders";
import { styles } from "./styles";

export default function OrdersScreen() {
  const renderItem = ({ item }) => (
    <View>
      {item.products.map((prod) => (
        <Text>{prod}</Text>
      ))}
      <Text>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Orders Screen</Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(order) => order.id}
      />
    </View>
  );
}
