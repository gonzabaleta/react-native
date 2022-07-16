import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signin, signup } from "../../store/actions/auth.actions";

import { colors } from "../../constants/theme/colors";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function AuthScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Login" : "Register";
  const messageTarget = isLogin ? "Login" : "Register";

  const handleChange = (text, type) => {
    if (type === "email") {
      setEmail(text);
      console.log(email);
    } else {
      setPassword(text);
      console.log(password);
    }
  };

  const handleSubmit = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const handleChangeAuth = () => {
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => handleChange(text, "email")}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => handleChange(text, "password")}
          value={email}
        />
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => handleChangeAuth()}>
            <Text style={styles.promptButton}>{messageAction}</Text>
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
