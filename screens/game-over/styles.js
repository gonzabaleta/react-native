import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "80%",
    height: 300,
  },

  imageLandscape: {
    width: "50%",
    height: 150,
  },

  card: {
    marginVertical: 10,
    padding: 20,
    width: width / 1.5,
    maxWidth: "80%",
    alignItems: "center",
  },
});
