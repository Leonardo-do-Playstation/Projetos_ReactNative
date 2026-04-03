import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";

import { Menu } from "../components/Menu/Menu";
import { Logo } from "../components/Logo/Logo";

import { SecButton } from "../components/SecButton/SecButton";

import { styles } from "./HomeStyles";
import { InputLength } from "../components/inputLenght/inputLength";

export function Home() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <InputLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />

        <SecButton passwordLength={passwordLength}/>
      </View>

      {/*<Text>Home is workink!!👌</Text>
            <Text>Open up App.tsx to start working on your app!👌👌</Text>*/}

      <StatusBar style="light" />
    </View>
  );
}
