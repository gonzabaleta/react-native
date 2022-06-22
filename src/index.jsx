import { Text, View } from "react-native";

import AppNavigator from "./navigation";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function Root() {
  return <AppNavigator />;
}
