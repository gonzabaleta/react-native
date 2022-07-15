import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CartItem } from "../../components";
import { removeItem } from "../../store/actions/cart.actions";
import { styles } from "./styles";

export default function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onHandlerDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const onHandlerConfirmCart = () => {
    console.log("Confirm cart");
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onHandlerDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList data={cart} renderItem={renderItem} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => onHandlerConfirmCart()}
        >
          <Text style={styles.buttonText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
