import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to products screen"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}
