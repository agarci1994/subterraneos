import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

import Main from "./Views/Main";
import Contact from "./Views/Contact";
import Info from "./Views/Info";
import Chapters from "./Views/Chapters";
import Profile from "./Views/Profile";
import Social from "./Views/Social";
import Details from "./Views/Details";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#000",
          }}
          initialRouteName="Main"
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Inicio",
            }}
          />
          <Stack.Screen
            name="Details"
            component={({ route }) => <Details props={route.params} />}
            options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="Chapters"
            component={Chapters}
            options={{
              title: "Programas",
            }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{
              title: "Información",
            }}
          />
          <Stack.Screen
            name="Email"
            component={Contact}
            options={{
              title: "Contacta con nosotros",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Perfil",
            }}
          />
          <Stack.Screen
            name="Social"
            component={Social}
            options={{
              title: "Redes sociales",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
