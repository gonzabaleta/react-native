import { Alert, Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import { useEffect, useRef, useState } from "react";

import { styles } from "./styles";
import theme from "../../constants/theme";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userNumber)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const handlerNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("No mientas!", "Tu sabes que no es verdad", [
        { text: "OK", style: "cancel" },
      ]);
      return null;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else currentLow.current = currentGuess;

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((current) => current + 1);
  };

  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Menor"
          onPress={() => handlerNextGuess("lower")}
          color={theme.colors.secondary}
        />
        <Button
          title="Mayor"
          onPress={() => handlerNextGuess("higher")}
          color={theme.colors.secondary}
        />
      </Card>
    </View>
  );
}
