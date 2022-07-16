import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/theme/colors";
import { styles } from "./styles";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export default function OrderItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.date}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailTotal}>Total: ${item.total}</Text>
        </View>

        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
