import { Dimensions, StyleSheet } from "react-native";

import theme from "../../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  containerGeneric: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: theme.colors.textColor,
    fontSize: theme.fontSize.large,
    marginBottom: 15,
    fontFamily: "open-sans-bold",
  },
  subtitle: {
    fontSize: theme.fontSize.medium,
    fontFamily: "open-sans",
  },
  inputContainer: {
    width: "80%",
    maxWidth: "90%",
    minWidth: width * 0.7,
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    width: width * 0.625,
    justifyContent: "space-between",
    paddingVertical: width > 600 ? 20 : 10,
    // paddingHorizontal: 25,
  },
});
