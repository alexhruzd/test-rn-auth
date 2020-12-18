import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AccordionListItem from "../../components/AccordionListItem";
import CardMovie from "../../components/CardMovie/CardMovie";
import InputSearch from "../../components/InputSearch";
import MoviesService from "../../services/MoviesService";

const movieService = new MoviesService();

const MoviesScreen = () => {
  const [listFilms, setListFilms] = useState([]);

  useEffect(() => {
    movieService.getPopularMovies(1).then((movies) => {
      setListFilms(movies);
    });
  }, []);

  const itemList = ({ item }) => (
    <AccordionListItem title={item.title}>
      <CardMovie id={item.id} />
    </AccordionListItem>
  );

  const onChangeMovieDBSearch = (text) => {
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <Text>This is MoviesScreen!</Text>

      <InputSearch placeholder="Search MovieDB" onChangeText={onChangeMovieDBSearch} />
      <InputSearch placeholder="Search My Movies" />

      <FlatList
        style={{ width: "100%" }}
        data={listFilms}
        renderItem={itemList}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});

export default MoviesScreen;
