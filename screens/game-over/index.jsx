import { Button, Dimensions, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Card } from "../../components";
import { styles } from "./styles";

export default function GameOver({ rounds, choice, onRestart }) {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait());
  };

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);

    return () => Dimensions.removeEventListener("change", statePortrait);
  });

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/vectors/game-over-vector-background-emoticon-with-glitch-effect-cyber-gamer-vector-id1182665410?k=20&m=1182665410&s=612x612&w=0&h=-R6phO5biw_KFDY_nVl1e4HLrxujGbMFIUqUIQOtCas=",
        }}
        style={isPortrait ? styles.image : styles.imageLandscape}
      />

      <Card style={styles.card}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choice}</Text>
      </Card>
      <Button title="Reiniciar" onPress={onRestart} />
    </View>
  );
}
