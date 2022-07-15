import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../store/actions/cart.actions";
import { styles } from "./styles";

export default function ProductDetailsScreen() {
  const product = useSelector((state) => state.product.selected);

  const addToCart = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.id}</Text>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>{product.description}</Text>
      <Text style={styles.text}>{product.weight}</Text>
      <Text style={styles.text}>${product.price}</Text>
      <Button title="Add to cart" />
    </View>
  );
}
