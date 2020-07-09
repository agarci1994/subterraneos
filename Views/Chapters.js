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
          img: require("../assets/1.jpg"),
          title: "Desmitificando los años 20",
          library: {
            films: {
              documentary: [],
              fiction: [],
              TV: [],
            },
            musics: {
              genres: [],
              artist: [],
              album: [],
            },
            books: {
              bio: [],
              fiction: [],
              essay: [],
            },
          },
        },
        {
          img: require("../assets/2.png"),
          title: "La revolución industrial",
          library: {
            films: {
              documentary: [],
              fiction: [],
              TV: [],
            },
            musics: {
              genres: [],
              artist: [],
              album: [],
            },
            books: {
              bio: [],
              fiction: [],
              essay: [],
            },
          },
        },
        {
          img: require("../assets/3.jpg"),
          title: "La guerra del vietnam",
          library: {
            films: {
              documentary: [],
              fiction: [],
              TV: [],
            },
            musics: {
              genres: [],
              artist: [],
              album: [],
            },
            books: {
              bio: [],
              fiction: [],
              essay: [],
            },
          },
        },
        {
          img: require("../assets/4.jpg"),
          title: "Guerra civil",
          library: {
            films: {
              documentary: [],
              fiction: [],
              TV: [],
            },
            musics: {
              genres: [],
              artist: [],
              album: [],
            },
            books: {
              bio: [],
              fiction: [],
              essay: [],
            },
          },
        },
        {
          img: require("../assets/5.jpg"),
          title: "Luchas por los derechos LGTB",
          library: {
            films: {
              documentary: [],
              fiction: [],
              TV: [],
            },
            musics: {
              genres: [],
              artist: [],
              album: [],
            },
            books: {
              bio: [],
              fiction: [],
              essay: [],
            },
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
