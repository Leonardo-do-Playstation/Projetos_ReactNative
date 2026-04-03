import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./SecButtonStyles";

import { InputPassword } from "../InputPassword/InputPassword";

import { passwordService } from "../../services/passswordService";

export function SecButton() {
  const [pass, setPass] = useState("");

  function handleGenPassword() {
    let token = passwordService();
    setPass(token);
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

      <InputPassword pass={pass} />

      <Pressable
        onPress={handleGenPassword}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#506ee5" : "#1E90FF" },
        ]}
      >
        <Text style={styles.texto} onPress={handleGenPassword}>
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
        <Text style={styles.texto} onPress={handleCopy}>
          COPIAR 🗒️
        </Text>
      </Pressable>
    </>
  );
}
