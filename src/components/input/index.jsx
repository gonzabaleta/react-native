import { Text, TextInput, View } from "react-native";

import Label from "../label";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { styles } from "./styles";

export default function Input({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  label,
  hasError,
  error,
  touched,
  ...props
}) {
  return (
    <View style={styles.container}>
      <Label label={label} {...props}>
        <TextInput
          {...props}
          style={styles.input}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </Label>
      {hasError && touched && (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      )}
    </View>
  );
}
