import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Label({ children, label, subLabel }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {subLabel && <Text style={styles.sublabel}>{subLabel}</Text>}
    </View>
  );
}
