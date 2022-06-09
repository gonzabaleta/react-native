import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
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
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});
