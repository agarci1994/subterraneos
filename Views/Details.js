import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Audio } from "expo-av";
import { Button } from "native-base";

export default function Details({ props }) {
  let soundObject = new Audio.Sound();

  const startAudio = async () => {
    soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../assets/programa1.mp3"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log(error);
    }
  };

  const stopAudio = async () => {
    try {
      await soundObject.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View>
        <Text>Puedes escuchar el programa aquí: </Text>
        <Button onPress={startAudio}>
          <Text>Start</Text>
        </Button>
        <Button onPress={stopAudio}>
          <Text>Stop</Text>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 40,
    height: "40%",
    width: "80%",
    borderRadius: 100,
  },
});
