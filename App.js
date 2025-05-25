import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screen/GameScreen";
import GameOverScreen from "./screen/GameOverScreen";
export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  function onPickNumberHandler(numberPicked) {
    setPickedNumber(numberPicked);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickNumber={onPickNumberHandler} />;
  if (pickedNumber) {
    screen = (
      <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && pickedNumber) {
    screen = <GameOverScreen></GameOverScreen>;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/dices.jpg")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
