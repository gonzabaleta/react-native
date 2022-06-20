import { ActivityIndicator, SafeAreaView } from "react-native";

import GameOver from "./screens/game-over";
import GameScreen from "./screens/game-screen";
import { Header } from "./components";
import StartGame from "./screens/start-game";
import { styles } from "./styles";
import theme from "./constants/theme";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState("");
  const [guessRounds, setGuessRounds] = useState(0);

  let content = <StartGame setUserNumber={setUserNumber} />;

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const handleRestartGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        rounds={guessRounds}
        onRestart={handleRestartGame}
        choice={userNumber}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </SafeAreaView>
  );
}
