import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AccordionListItem from "../../components/AccordionListItem";
import CardMovie from "../../components/CardMovie/CardMovie";
import CheckBoxItem from "../../components/CheckBoxItem/CheckBoxItem";
import InputSearch from "../../components/InputSearch";
import MoviesService from "../../services/MoviesService";

const movieService = new MoviesService();

const MoviesScreen = () => {
  const [listFilms, setListFilms] = useState([]);
  const [listWatched, setListWatched] = useState([]);

  useEffect(() => {
    movieService.getPopularMovies(1).then((movies) => {
      setListFilms(movies);
    });
  }, []);

  const onChangeMovieDBSearch = (text) => {
    console.log(text);
  };

  const onWatchedMovie = (id) => {
    if (listWatched.indexOf(id) === -1) {
      setListWatched([...listWatched, id]);
    }
    console.log(listWatched);
  };

  const onCkeckedUnwatched = (checked) => {
    console.log(checked)
    if (checked) {
      setListFilms(
        [...listFilms].filter((item) => listWatched.indexOf(item.id) !== -1)
      );
    } else {
      movieService.getPopularMovies(1).then((movies) => {
        setListFilms(movies);
      });
    }
  };

  const itemList = ({ item }) => (
    <AccordionListItem title={item.title}>
      <CardMovie id={item.id} onWatched={onWatchedMovie} />
    </AccordionListItem>
  );

  return (
    <View style={styles.container}>
      <Text>This is MoviesScreen!</Text>

      <InputSearch
        placeholder="Search MovieDB"
        onSearch={onChangeMovieDBSearch}
      />
      <InputSearch placeholder="Search My Movies" />

      <View style={styles.watchedFilterBlock}>
        <CheckBoxItem
          title="Unwatched"
          iconName="unwatched"
          onCheked={onCkeckedUnwatched}
        />
        <CheckBoxItem title="Watched" iconName="watched" />
      </View>

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
  watchedFilterBlock: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginBottom: 20,
  },
});

export default MoviesScreen;
