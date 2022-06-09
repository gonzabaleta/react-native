import { Text } from "react-native";
import { styles } from "../Header/styles";

const CustomText = ({ style, children, ...props }) => {
  return (
    <Text {...props} style={{ ...styles.text, ...style }}>
      {children}
    </Text>
  );
};

export default CustomText;
