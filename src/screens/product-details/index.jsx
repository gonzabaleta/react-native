import { Text, View } from "react-native";

import { products } from "../../data/products";
import { styles } from "./styles";

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;

  const product = products.find((prod) => prod.id === productId);

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
