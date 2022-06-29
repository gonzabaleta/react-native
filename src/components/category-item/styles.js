import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    minHeight: 180,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
});
