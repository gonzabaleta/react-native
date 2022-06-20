import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card, CustomText, Input, NumberContainer } from "../../components";
import React, { useState } from "react";

import { styles } from "./styles";
import theme from "../../constants/theme";

export default function StartGame({ setUserNumber }) {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleChange = (text) => setNumber(text.replace(/[^0-9]/g, ""));

  const handleReset = () => {
    setNumber("");
    setConfirmed(false);
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNumber("");
  };

  const confirmedOutput = confirmed ? (
    <Card style={styles.inputContainer}>
      <CustomText>Tu selección</CustomText>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button
        title="Empezar Juego"
        onPress={() => setUserNumber(selectedNumber)}
        color={theme.colors.secondary}
      />
    </Card>
  ) : null;

  return (
    <KeyboardAvoidingView
      style={styles.containerGeneric}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={styles.containerGeneric}>
          <View style={styles.container}>
            <CustomText style={styles.title}>Comenzar Juego</CustomText>
            <Card style={styles.inputContainer}>
              <CustomText style={styles.subtitle}>Elija el número</CustomText>
              <Input
                placeholder="11"
                keyboardType="numeric"
                maxLength={2}
                blurOnSubmit
                autoCorrect={false}
                style={styles.input}
                value={number}
                onChangeText={handleChange}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title="Limpiar"
                  color={theme.colors.secondary}
                  onPress={handleReset}
                />
                <Button
                  title="Confirmar"
                  color={theme.colors.secondary}
                  onPress={handleConfirm}
                />
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
