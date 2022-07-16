import AuthNavigator from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab";
import { useSelector } from "react-redux";

export default function AppNavigator() {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
