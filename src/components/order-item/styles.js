import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },

  headerContainer: {},

  header: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },

  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detail: {},

  detailsTotal: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
});
