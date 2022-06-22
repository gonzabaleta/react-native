import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
      <Button
        title="Go to Product Details"
        onPress={() => navigation.navigate("ProductDetails")}
      />
    </View>
  );
}
