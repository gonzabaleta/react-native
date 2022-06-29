import MainNavigator from "./main";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
