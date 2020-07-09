import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

export default function Info() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.description}>
          En Subterráneos se pretenden abordar acontecimientos históricos de
          nuestra historia reciente que, situados bajo la lupa de las artes y la
          cultura, nos permitan acercarnos con mayor perspectiva crítica al
          momento actual. Un diálogo entre presente y pasado que tendrá siempre,
          como columna vertebral, las principales disciplinas artísticas– el
          cine, la música, la literatura y las artes plásticas–, entendiendo que
          las obras de arte suponen el documento histórico que mejor refleja el
          sentir– las pasiones y los miedos– del tiempo en que fueron
          realizadas. Así, poniendo en diálogo las películas, los libros o las
          canciones de una y otra época, en cada episodio se esbozará una suerte
          de mapa, tanto intelectual como emocional, que haga hincapié en la
          necesidad de entender– y recordar– el pasado para entender el presente
          y ser capaces de articular un futuro mejor.
        </Text>
        <View>
          <View>
            <Text style={styles.name}>Clara</Text>
            <Image
              style={styles.img}
              source={require("../assets/clara.jpeg")}
            />
            <Text style={styles.text}>
              La divulgación por bandera.Lee y lucha. Ha escrito en las revistas
              Letras Libres y Jot Down Magazine.Ha colaborado en la sección de
              cultura de El País, entre otros.
            </Text>
          </View>
          <View>
            <Text style={styles.name}>Javier</Text>
            <Image style={styles.img} source={require("../assets/javi.jpeg")} />
            <Text style={styles.text}>
              periodista por la Universidad Complutense de Madrid. Actualmente,
              realiza un máster en Periodismo Cultural. Apasionado del cine y la
              música. Colabora en Cultura Joven y en la revista musical Enlace
              Funk.
            </Text>
          </View>
          <View>
            <Text style={styles.name}>Pelayo</Text>
            <Image
              style={styles.img}
              source={require("../assets/pelayo.jpeg")}
            />
            <Text style={styles.text}>
              Graduado en Comunicación Audiovisual y actual estudiante de
              Filosofía; máster en Estudios de Cine y Audiovisual Contemporáneo
              y en Periodismo Cultural. Cinéfilo, apasionado de los libros,
              amante de la música. Divulgador de cine en el canal de YouTube
              "Harto Brillante".
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  description: {

    backgroundColor: "#AEAEAE",
padding: 40,
textAlign: "center",
fontWeight: "bold",
marginBottom: 30,
  },
  imageContainer: {
    marginTop: 40,
    height: "40%",
    width: "80%",
    borderRadius: 100,
  },
  img:{
    marginLeft: "15%",
    width: 300,
    height: 300
  },
  name: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30
  },
  text:{
    margin: 10
  }
});
