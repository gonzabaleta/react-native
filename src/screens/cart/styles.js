import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  cartList: {
    flex: 1,
  },
  footer: {
    borderRadius: 10,
  },

  buttonConfirm: {
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonText: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },

  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0.4,
  },

  totalTitle: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },

  total: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
});
