import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./SecButtonStyles";

import { InputPassword } from "../InputPassword/InputPassword";

import { passwordService } from "../../services/passwordService";

interface SecButtonProps {
  passwordLength: number;
}

export function SecButton({ passwordLength }: SecButtonProps) {
  const [pass, setPass] = useState("");

  function handleGenPassword() {
    let token = passwordService(passwordLength);
    setPass(token);
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <InputPassword pass={pass} />

      <Pressable
        onPress={handleGenPassword}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#506ee5" : "#1E90FF" },
        ]}
      >
        <Text style={styles.texto}>
          GERAR SENHA 🙊
        </Text>
      </Pressable>

      <Pressable
        onPress={handleCopy}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#506ee5" : "#1E90FF" },
        ]}
      >
        <Text style={styles.texto}>
          COPIAR 🗒️
        </Text>
      </Pressable>
    </>
  );
}