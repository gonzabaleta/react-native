import { Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";
import { styles } from "./styles";

export default function ProductItem({ item, onSelected }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.detail}>${item.price}</Text>
          <Text style={styles.detail}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
