import { Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/theme/colors";
import { styles } from "./styles";

export default function CartItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailQty}>{item.quantity}</Text>
          <Text style={styles.detailPrice}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
