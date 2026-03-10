import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import chicoHappy from "./assets/chico-happy.jpg";
import chicoSad from "./assets/chico-sad.jpg";
import { useState } from "react";

export default function App() {
  const [isHappy, setIsHappy] = useState(false);
  const [count, setCount] = useState(0);

  function handleMood() {
    setIsHappy((prev) => !prev);
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount((prev) => 0);
  }

  return (
    <View
      style={[styles.container, { backgroundColor: isHappy ? "gray" : "#fff" }]}
    >
      <TouchableOpacity onPress={handleMood}>
        <Image
          source={isHappy ? chicoHappy : chicoSad}
          style={isHappy ? styles.happyImage : styles.sadImage}
        />
      </TouchableOpacity>

      <Text style={styles.emojis}>
        {isHappy
          ? "💰\nFaça sempre o seu melhor!"
          : "💩\nHomens, queimem a vila!"}
      </Text>
      <Text style={{fontSize: 40}}>
        {isHappy
          ? "E viva a liberdade!"
          : ""}
      </Text>

      <Button title="MOOD" onPress={handleMood}></Button>

      <Text style={{ textAlign: "center", marginBottom: 7, marginTop: 15 }}>
        Presses = {count} {"\n"}
        {count > 10 && "Que bela habilidade em pressionar hein?!"}
      </Text>

      <Button title="RESET" onPress={handleReset}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sadImage: {
    width: 300,
    height: 300,
    borderWidth: 20,
  },
  happyImage: {
    width: 350,
    height: 350,
    borderWidth: 40,
  },
  emojis: {
    textAlign: "center",
    fontSize: 40,
    marginTop: 30,
  },
  count: {
    fontSize: 20,
  },
});
