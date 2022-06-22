import MainNavigator from "./main";
import { NavigationContainer } from "@react-navigation/native";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
