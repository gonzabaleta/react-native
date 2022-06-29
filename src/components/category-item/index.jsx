import { Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";
import { styles } from "./styles";

export default function CategoryItem({ item, onSelected }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={StyleSheet.flatten([
          styles.containerTouchable,
          { backgroundColor: item.color },
        ])}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
