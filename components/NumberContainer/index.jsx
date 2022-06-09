import { Text, View } from "react-native";

import { styles } from "./styles";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}
