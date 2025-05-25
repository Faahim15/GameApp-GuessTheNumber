import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";
export default function InstructionText({ children }) {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
