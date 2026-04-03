import { TextInput, View } from "react-native";
import { styles } from "./inputLengthStyles";

interface InputLengthProps {
  passwordLength: number;
  setPasswordLength: (value: number) => void;
}

export function InputLength({ passwordLength, setPasswordLength }: InputLengthProps) {
  return (
    <View>
      <TextInput
      placeholder="Tamanho da senha:"
        keyboardType="numeric"
        value={String(passwordLength)}
        onChangeText={(text) => setPasswordLength(Number(text))}
        style={
          styles.inputLenght
        }
      />
    </View>
  );
}
