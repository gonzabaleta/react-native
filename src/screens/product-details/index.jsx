import { Text, View } from "react-native";

import { styles } from "./styles";
import { useSelector } from "react-redux";

export default function ProductDetailsScreen() {
  const product = useSelector((state) => state.product.selected);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.id}</Text>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>{product.description}</Text>
      <Text style={styles.text}>{product.weight}</Text>
      <Text style={styles.text}>${product.price}</Text>
    </View>
  );
}
