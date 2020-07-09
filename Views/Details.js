import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Audio } from "expo-av";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Details({ props }) {
  const navigation = useNavigation();
  let soundObject = new Audio.Sound();
  const [position, setPosition] = useState();
  let player = false;

  const startAudio = async () => {
    if (!player) {
      if (position) {
        await soundObject.loadAsync(require("../assets/programa1.mp3"));
        await soundObject.setPositionAsync(position);
        await soundObject.playAsync();
      } else {
        try {
          await soundObject.loadAsync(require("../assets/programa1.mp3"));
          await soundObject.playAsync();
          // Your sound is playing!
        } catch (error) {
          console.log(error);
        }
      }
      player = true;
    }
  };

  const stopAudio = async () => {
    try {
      await soundObject.stopAsync();
      setPosition(0);
      player = false;
    } catch (error) {
      console.log(error);
    }
  };

  const pauseAudio = async () => {
    const time = await soundObject.getStatusAsync();
    try {
      await soundObject.pauseAsync();
      setPosition(time["positionMillis"]);
      player = false;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Text>Puedes escuchar el programa aquí: </Text>
        <View style={styles.player}>
          <TouchableOpacity onPress={startAudio}>
            <Image source={require("../assets/play.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={pauseAudio}>
            <Image source={require("../assets/pause.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={stopAudio}>
            <Image source={require("../assets/stop.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Sections", {
                library: props.library.musics,
                type: "Música",
              })
            }
          >
            <Image
              style={styles.button}
              source={require("../assets/musica.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Sections", {
                library: props.library.films,
                type: "Cinematografía",
              })
            }
          >
            <Image
              style={styles.button}
              source={require("../assets/cine.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Sections", {
                library: props.library.books,
                type: "Literatura",
              })
            }
          >
            <Image
              style={styles.button}
              source={require("../assets/libro.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginLeft: "10%",
    marginTop: 40,
    height: "40%",
    width: "80%",
    borderRadius: 100,
  },
  player: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
  buttonContainer: {
    marginLeft: "35%",
    marginTop: 40,
    height: "40%",
    borderRadius: 100,
  },
});
