import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Titles from "../components/ui/Titles";
import Colors from "../constant/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredInputText) {
    setEnteredNumber(enteredInputText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmNumberHandler() {
    const chosenNumber = Number(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invali Number",
        "Number has to be a number between 1 to 99",
        [{ text: "Okay", style: "default", onPress: resetInputHandler }]
      );
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Titles>Guess My Number</Titles>

      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          maxLength={2}
          style={styles.numberInput}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          valule={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={{ flexDirection: "row" }}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 26,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
