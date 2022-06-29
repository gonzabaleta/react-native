import CartNavigator from "./cart";
import { CartScreen } from "../screens/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";
import OrdersNavigator from "./orders";
import { Text } from "react-native";
import { colors } from "../constants/theme/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = ({ focused, label }) => (
  <Text
    style={{
      color: focused ? colors.primary : colors.secondary,
      fontFamily: focused ? "Lato-Bold" : "Lato-Regular",
    }}
  >
    {label}
  </Text>
);

export default function TabNavigator() {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={MainNavigator}
        options={{
          tabBarLabel: ({ focused }) =>
            LabelBottomTab({ focused, label: "Shop" }),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />

      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: ({ focused }) =>
            LabelBottomTab({ focused, label: "Cart" }),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />

      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: ({ focused }) =>
            LabelBottomTab({ focused, label: "Orders" }),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "file-tray-full" : "file-tray-full-outline"}
              size={20}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
