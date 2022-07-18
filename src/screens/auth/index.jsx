import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signin, signup } from "../../store/actions/auth.actions";
import { useReducer, useState } from "react";

import { Input } from "../../components";
import { UPDATE_FORM } from "../../utils/forms";
import { colors } from "../../constants/theme/colors";
import { onFocusOut } from "../../utils/forms";
import { onInputChange } from "../../utils/forms";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const initialState = {
  email: {
    value: "",
    touched: false,
    hasError: true,
    error: "",
  },
  password: {
    value: "",
    touched: false,
    hasError: true,
    error: "",
  },

  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;

      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

export default function AuthScreen() {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageTarget = isLogin ? "Register" : "Login";

  const handleChange = (text, type) => {
    onInputChange(type, text, dispatchFormState, formState);
  };

  const handleSubmit = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const handleChangeAuth = () => {
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
  };

  const handleBlur = (text, type) => {
    onFocusOut(type, text, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="example@gmail.com"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => handleChange(text, "email")}
          value={formState.email.value}
          label="Email"
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
          onBlur={(e) => handleBlur(e.nativeEvent.text, "email")}
        />
        <Input
          placeholder="********"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => handleChange(text, "password")}
          value={formState.password.value}
          label="Password"
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
          onBlur={(e) => handleBlur(e.nativeEvent.text, "password")}
        />
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => handleChangeAuth()}>
            <Text style={styles.promptButton}>{messageTarget}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        title={title}
        color={colors.primary}
        onPress={() => handleSubmit()}
      />
    </KeyboardAvoidingView>
  );
}
