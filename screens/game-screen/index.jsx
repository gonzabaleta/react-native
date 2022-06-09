import { Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";

import { styles } from "./styles";
import theme from "../../constants/theme";
import { useState } from "react";

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

export default function GameScreen({ userNumber }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 99, userNumber)
  );

  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Menor"
          onPress={() => null}
          color={theme.colors.secondary}
        />
        <Button
          title="Mayor"
          onPress={() => null}
          color={theme.colors.secondary}
        />
      </Card>
    </View>
  );
}
