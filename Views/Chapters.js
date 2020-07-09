import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import Card from "./Card";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          img: require("../assets/1.jpeg"),
          title: "Desmitificando los años 20",
          library: {
            films: [
              {
                img: require("../assets/film1.jpg"),
                title: "The Grapes of Wrath",
                author: "John Ford",
                year: 1930,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/film2.jpg"),
                title: "Tiempos modernos",
                author: "Charles Chaplin",
                year: 1936,
                details:
                  "Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico que trabaja apretando tuercas acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motin, gracias a lo cual queda en libertad. Una vez fuera, emprende la lucha por la victoria en compañía de una pobre joven huérfana a la que conoce en la calle.",
              },
              {
                img: require("../assets/film3.jpg"),
                title: "Érase una vez en América",
                author: "Sergio Leone",
                year: 1984,
                details:
                  "La película comienza cuando Noodles tiene que abandonar Nueva York y se cuenta desde entonces con escenas retrospectivas cronológicas desde 1920.",
              },
              {
                img: require("../assets/film4.jpg"),
                title: "Y el mundo marcha",
                author: "King Vidor",
                year: 1928,
                details:
                  "Un joven solitario impulsado por la ambición y el idealismo se enfrenta a la vida en el Nueva York de principios del siglo XX. Las duras condiciones que impone esta realidad desmitifican el mítico sueño americano.",
              },
            ],
            musics: [
              {
                img: require("../assets/musica1.jpg"),
                title: "The original Charleston",
                author: "Isham Jones Orchestra",
                music: "https://www.youtube.com/embed/_Y8aZCoG0YA",
                year: 1925,
              },
              {
                img: require("../assets/musica2.jpg"),
                title: "Old Time Party Music",
                author: "Nelson Riddle & His Orchestra",
                music: "https://www.youtube.com/embed/oEo-ZveFT5w",
                year: 1974,
              },
              {
                img: require("../assets/musica3.jpg"),
                title: "Nocturnes, Op. 9",
                author: "Frédéric Chopin",
                music: "https://www.youtube.com/embed/9E6b3swbnWg",
                year: 1830,
              },
              {
                img: require("../assets/musica4.jpg"),
                title: "Royal Crown Revue",
                author: "Kings Of Gangster Bop",
                music: "https://www.youtube.com/embed/brmAA7bmhkI",
                year: 1991,
              },
              {
                img: require("../assets/musica5.jpg"),
                title: "Peace Piece And Other Pieces",
                music: "https://www.youtube.com/embed/Nv2GgV34qIg",
                author: "Bill Evans",
                year: 1975,
              },
            ],
            books: [
              {
                img: require("../assets/libro1.jpg"),
                title: "Tu no eres como otras madres",
                author: "Angelika Schrobsdorff",
                year: 2016,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/libro2.jpg"),
                title: "The Great Gatsby ",
                author: "F. Scott Fitzgerald",
                year: 1927,
                details:
                  "Jay Gatsby es un hombre hecho a sí mismo famoso por sus fiestas decadentes y bañadas en champán. A pesar de estar rodeado por la belleza y la belleza de Long Island, solo anhela a Daisy Buchanan. En prosa brillante, Fitzgerald muestra a Gatsby perseguir su sueño hasta su trágica conclusión.",
              },
              {
                img: require("../assets/libro3.jpg"),
                title: "Carta de una desconocida",
                author: "Stefan Zweig",
                year: 1922,
                details:
                  "«Sólo quiero hablar contigo, decírtelo todo por primera vez. Tendrías que conocer toda mi vida, que siempre fue la tuya aunque nunca lo supiste. Pero sólo tú conocerás mi secreto, cuando esté muerta y ya no tengas que darme una respuesta; cuando esto que ahora me sacude con escalofríos sea de verdad el final. En el caso de que siguiera viviendo, rompería esta carta y continuaría en silencio, igual que siempre. Si sostienes esta carta en tus manos, sabrás que una muerta te está explicando aquí su vida, una vida que fue siempre la tuya desde la primera hasta la última hora»",
              },
            ],
          },
        },
        {
          img: require("../assets/2.jpg"),
          title: "La revolución industrial",
          library: {
            films: [
              {
                img: require("../assets/film1.jpg"),
                title: "The Grapes of Wrath",
                author: "John Ford",
                year: 1930,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/film2.jpg"),
                title: "Tiempos modernos",
                author: "Charles Chaplin",
                year: 1936,
                details:
                  "Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico que trabaja apretando tuercas acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motin, gracias a lo cual queda en libertad. Una vez fuera, emprende la lucha por la victoria en compañía de una pobre joven huérfana a la que conoce en la calle.",
              },
              {
                img: require("../assets/film3.jpg"),
                title: "Érase una vez en América",
                author: "Sergio Leone",
                year: 1984,
                details:
                  "La película comienza cuando Noodles tiene que abandonar Nueva York y se cuenta desde entonces con escenas retrospectivas cronológicas desde 1920.",
              },
              {
                img: require("../assets/film4.jpg"),
                title: "Y el mundo marcha",
                author: "King Vidor",
                year: 1928,
                details:
                  "Un joven solitario impulsado por la ambición y el idealismo se enfrenta a la vida en el Nueva York de principios del siglo XX. Las duras condiciones que impone esta realidad desmitifican el mítico sueño americano.",
              },
            ],
            musics: [
              {
                img: require("../assets/musica1.jpg"),
                title: "The original Charleston",
                author: "Isham Jones Orchestra",
                year: 1925,
              },
              {
                img: require("../assets/musica2.jpg"),
                title: "Old Time Party Music",
                author: "Nelson Riddle & His Orchestra",
                year: 1974,
              },
              {
                img: require("../assets/musica3.jpg"),
                title: "Nocturnes, Op. 9",
                author: "Frédéric Chopin",
                year: 1830,
              },
              {
                img: require("../assets/musica4.jpg"),
                title: "Royal Crown Revue",
                author: "Kings Of Gangster Bop",
                year: 1991,
              },
              {
                img: require("../assets/musica5.jpg"),
                title: "Peace Piece And Other Pieces",
                author: "Bill Evans",
                year: 1975,
              },
            ],
            books: [
              {
                img: require("../assets/libro1.jpg"),
                title: "Tu no eres como otras madres",
                author: "Angelika Schrobsdorff",
                year: 2016,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/libro2.jpg"),
                title: "The Great Gatsby ",
                author: "F. Scott Fitzgerald",
                year: 1927,
                details:
                  "Jay Gatsby es un hombre hecho a sí mismo famoso por sus fiestas decadentes y bañadas en champán. A pesar de estar rodeado por la belleza y la belleza de Long Island, solo anhela a Daisy Buchanan. En prosa brillante, Fitzgerald muestra a Gatsby perseguir su sueño hasta su trágica conclusión.",
              },
              {
                img: require("../assets/libro3.jpg"),
                title: "Carta de una desconocida",
                author: "Stefan Zweig",
                year: 1922,
                details:
                  "«Sólo quiero hablar contigo, decírtelo todo por primera vez. Tendrías que conocer toda mi vida, que siempre fue la tuya aunque nunca lo supiste. Pero sólo tú conocerás mi secreto, cuando esté muerta y ya no tengas que darme una respuesta; cuando esto que ahora me sacude con escalofríos sea de verdad el final. En el caso de que siguiera viviendo, rompería esta carta y continuaría en silencio, igual que siempre. Si sostienes esta carta en tus manos, sabrás que una muerta te está explicando aquí su vida, una vida que fue siempre la tuya desde la primera hasta la última hora»",
              },
            ],
          },
        },
        {
          img: require("../assets/3.jpg"),
          title: "La guerra del vietnam",
          library: {
            films: [
              {
                img: require("../assets/film1.jpg"),
                title: "The Grapes of Wrath",
                author: "John Ford",
                year: 1930,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/film2.jpg"),
                title: "Tiempos modernos",
                author: "Charles Chaplin",
                year: 1936,
                details:
                  "Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico que trabaja apretando tuercas acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motin, gracias a lo cual queda en libertad. Una vez fuera, emprende la lucha por la victoria en compañía de una pobre joven huérfana a la que conoce en la calle.",
              },
              {
                img: require("../assets/film3.jpg"),
                title: "Érase una vez en América",
                author: "Sergio Leone",
                year: 1984,
                details:
                  "La película comienza cuando Noodles tiene que abandonar Nueva York y se cuenta desde entonces con escenas retrospectivas cronológicas desde 1920.",
              },
              {
                img: require("../assets/film4.jpg"),
                title: "Y el mundo marcha",
                author: "King Vidor",
                year: 1928,
                details:
                  "Un joven solitario impulsado por la ambición y el idealismo se enfrenta a la vida en el Nueva York de principios del siglo XX. Las duras condiciones que impone esta realidad desmitifican el mítico sueño americano.",
              },
            ],
            musics: [
              {
                img: require("../assets/musica1.jpg"),
                title: "The original Charleston",
                author: "Isham Jones Orchestra",
                year: 1925,
              },
              {
                img: require("../assets/musica2.jpg"),
                title: "Old Time Party Music",
                author: "Nelson Riddle & His Orchestra",
                year: 1974,
              },
              {
                img: require("../assets/musica3.jpg"),
                title: "Nocturnes, Op. 9",
                author: "Frédéric Chopin",
                year: 1830,
              },
              {
                img: require("../assets/musica4.jpg"),
                title: "Royal Crown Revue",
                author: "Kings Of Gangster Bop",
                year: 1991,
              },
              {
                img: require("../assets/musica5.jpg"),
                title: "Peace Piece And Other Pieces",
                author: "Bill Evans",
                year: 1975,
              },
            ],
            books: [
              {
                img: require("../assets/libro1.jpg"),
                title: "Tu no eres como otras madres",
                author: "Angelika Schrobsdorff",
                year: 2016,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/libro2.jpg"),
                title: "The Great Gatsby ",
                author: "F. Scott Fitzgerald",
                year: 1927,
                details:
                  "Jay Gatsby es un hombre hecho a sí mismo famoso por sus fiestas decadentes y bañadas en champán. A pesar de estar rodeado por la belleza y la belleza de Long Island, solo anhela a Daisy Buchanan. En prosa brillante, Fitzgerald muestra a Gatsby perseguir su sueño hasta su trágica conclusión.",
              },
              {
                img: require("../assets/libro3.jpg"),
                title: "Carta de una desconocida",
                author: "Stefan Zweig",
                year: 1922,
                details:
                  "«Sólo quiero hablar contigo, decírtelo todo por primera vez. Tendrías que conocer toda mi vida, que siempre fue la tuya aunque nunca lo supiste. Pero sólo tú conocerás mi secreto, cuando esté muerta y ya no tengas que darme una respuesta; cuando esto que ahora me sacude con escalofríos sea de verdad el final. En el caso de que siguiera viviendo, rompería esta carta y continuaría en silencio, igual que siempre. Si sostienes esta carta en tus manos, sabrás que una muerta te está explicando aquí su vida, una vida que fue siempre la tuya desde la primera hasta la última hora»",
              },
            ],
          },
        },
        {
          img: require("../assets/4.jpg"),
          title: "Guerra civil",
          library: {
            films: [
              {
                img: require("../assets/film1.jpg"),
                title: "The Grapes of Wrath",
                author: "John Ford",
                year: 1930,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/film2.jpg"),
                title: "Tiempos modernos",
                author: "Charles Chaplin",
                year: 1936,
                details:
                  "Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico que trabaja apretando tuercas acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motin, gracias a lo cual queda en libertad. Una vez fuera, emprende la lucha por la victoria en compañía de una pobre joven huérfana a la que conoce en la calle.",
              },
              {
                img: require("../assets/film3.jpg"),
                title: "Érase una vez en América",
                author: "Sergio Leone",
                year: 1984,
                details:
                  "La película comienza cuando Noodles tiene que abandonar Nueva York y se cuenta desde entonces con escenas retrospectivas cronológicas desde 1920.",
              },
              {
                img: require("../assets/film4.jpg"),
                title: "Y el mundo marcha",
                author: "King Vidor",
                year: 1928,
                details:
                  "Un joven solitario impulsado por la ambición y el idealismo se enfrenta a la vida en el Nueva York de principios del siglo XX. Las duras condiciones que impone esta realidad desmitifican el mítico sueño americano.",
              },
            ],
            musics: [
              {
                img: require("../assets/musica1.jpg"),
                title: "The original Charleston",
                author: "Isham Jones Orchestra",
                year: 1925,
              },
              {
                img: require("../assets/musica2.jpg"),
                title: "Old Time Party Music",
                author: "Nelson Riddle & His Orchestra",
                year: 1974,
              },
              {
                img: require("../assets/musica3.jpg"),
                title: "Nocturnes, Op. 9",
                author: "Frédéric Chopin",
                year: 1830,
              },
              {
                img: require("../assets/musica4.jpg"),
                title: "Royal Crown Revue",
                author: "Kings Of Gangster Bop",
                year: 1991,
              },
              {
                img: require("../assets/musica5.jpg"),
                title: "Peace Piece And Other Pieces",
                author: "Bill Evans",
                year: 1975,
              },
            ],
            books: [
              {
                img: require("../assets/libro1.jpg"),
                title: "Tu no eres como otras madres",
                author: "Angelika Schrobsdorff",
                year: 2016,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/libro2.jpg"),
                title: "The Great Gatsby ",
                author: "F. Scott Fitzgerald",
                year: 1927,
                details:
                  "Jay Gatsby es un hombre hecho a sí mismo famoso por sus fiestas decadentes y bañadas en champán. A pesar de estar rodeado por la belleza y la belleza de Long Island, solo anhela a Daisy Buchanan. En prosa brillante, Fitzgerald muestra a Gatsby perseguir su sueño hasta su trágica conclusión.",
              },
              {
                img: require("../assets/libro3.jpg"),
                title: "Carta de una desconocida",
                author: "Stefan Zweig",
                year: 1922,
                details:
                  "«Sólo quiero hablar contigo, decírtelo todo por primera vez. Tendrías que conocer toda mi vida, que siempre fue la tuya aunque nunca lo supiste. Pero sólo tú conocerás mi secreto, cuando esté muerta y ya no tengas que darme una respuesta; cuando esto que ahora me sacude con escalofríos sea de verdad el final. En el caso de que siguiera viviendo, rompería esta carta y continuaría en silencio, igual que siempre. Si sostienes esta carta en tus manos, sabrás que una muerta te está explicando aquí su vida, una vida que fue siempre la tuya desde la primera hasta la última hora»",
              },
            ],
          },
        },
        {
          img: require("../assets/5.jpg"),
          title: "Luchas por los derechos LGTB",
          library: {
            films: [
              {
                img: require("../assets/film1.jpg"),
                title: "The Grapes of Wrath",
                author: "John Ford",
                year: 1930,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/film2.jpg"),
                title: "Tiempos modernos",
                author: "Charles Chaplin",
                year: 1936,
                details:
                  "Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico que trabaja apretando tuercas acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motin, gracias a lo cual queda en libertad. Una vez fuera, emprende la lucha por la victoria en compañía de una pobre joven huérfana a la que conoce en la calle.",
              },
              {
                img: require("../assets/film3.jpg"),
                title: "Érase una vez en América",
                author: "Sergio Leone",
                year: 1984,
                details:
                  "La película comienza cuando Noodles tiene que abandonar Nueva York y se cuenta desde entonces con escenas retrospectivas cronológicas desde 1920.",
              },
              {
                img: require("../assets/film4.jpg"),
                title: "Y el mundo marcha",
                author: "King Vidor",
                year: 1928,
                details:
                  "Un joven solitario impulsado por la ambición y el idealismo se enfrenta a la vida en el Nueva York de principios del siglo XX. Las duras condiciones que impone esta realidad desmitifican el mítico sueño americano.",
              },
            ],
            musics: [
              {
                img: require("../assets/musica1.jpg"),
                title: "The original Charleston",
                author: "Isham Jones Orchestra",
                year: 1925,
              },
              {
                img: require("../assets/musica2.jpg"),
                title: "Old Time Party Music",
                author: "Nelson Riddle & His Orchestra",
                year: 1974,
              },
              {
                img: require("../assets/musica3.jpg"),
                title: "Nocturnes, Op. 9",
                author: "Frédéric Chopin",
                year: 1830,
              },
              {
                img: require("../assets/musica4.jpg"),
                title: "Royal Crown Revue",
                author: "Kings Of Gangster Bop",
                year: 1991,
              },
              {
                img: require("../assets/musica5.jpg"),
                title: "Peace Piece And Other Pieces",
                author: "Bill Evans",
                year: 1975,
              },
            ],
            books: [
              {
                img: require("../assets/libro1.jpg"),
                title: "Tu no eres como otras madres",
                author: "Angelika Schrobsdorff",
                year: 2016,
                details:
                  "La narración de Angelika Schrobsdorff recons­truye la vida real e inconformista de su madre, una mujer nacida en una familia de la burguesía judía de Berlín, liberada de los prejuicios de su tiempo y deseosa de casarse con un artista ",
              },
              {
                img: require("../assets/libro2.jpg"),
                title: "The Great Gatsby ",
                author: "F. Scott Fitzgerald",
                year: 1927,
                details:
                  "Jay Gatsby es un hombre hecho a sí mismo famoso por sus fiestas decadentes y bañadas en champán. A pesar de estar rodeado por la belleza y la belleza de Long Island, solo anhela a Daisy Buchanan. En prosa brillante, Fitzgerald muestra a Gatsby perseguir su sueño hasta su trágica conclusión.",
              },
              {
                img: require("../assets/libro3.jpg"),
                title: "Carta de una desconocida",
                author: "Stefan Zweig",
                year: 1922,
                details:
                  "«Sólo quiero hablar contigo, decírtelo todo por primera vez. Tendrías que conocer toda mi vida, que siempre fue la tuya aunque nunca lo supiste. Pero sólo tú conocerás mi secreto, cuando esté muerta y ya no tengas que darme una respuesta; cuando esto que ahora me sacude con escalofríos sea de verdad el final. En el caso de que siguiera viviendo, rompería esta carta y continuaría en silencio, igual que siempre. Si sostienes esta carta en tus manos, sabrás que una muerta te está explicando aquí su vida, una vida que fue siempre la tuya desde la primera hasta la última hora»",
              },
            ],
          },
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return <Card {...item} />;
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: 50,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={350}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) =>
              this.setState({
                activeIndex: index,
              })
            }
          /> 
        </View> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 200,
    width: "8%",
  },
  img: {
    width: "130%",
    height: "100%",
  },
  carouselContainer: {},
});
