import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [dataList, setDataList] = useState([]);
  const [myMovies, setMyMovie] = useState([]);

  const [listUnWatched, setListUnWatched] = useState([]);
  const [listWatched, setListWatched] = useState([]);

  const [checkWatched, setCheckWatched] = useState(false);
  const [checkUnWatched, setCheckUnWatched] = useState(false);
  const [searchState, setSearchState] = useState(false);

  useEffect(() => {
    getMyMovies().then((myMovies) => {
      if (myMovies.length !== 0) {
        setDataList(myMovies);
      } 
    });
  }, []);

  useEffect(() => {
    console.log(myMovies)
    if (searchState) refreshList(dataList);
    else refreshList(myMovies);
  }, [checkWatched, checkUnWatched, listUnWatched, listWatched, dataList, searchState]);
  

  const getMyMovies = async () => {
    let myMovies = await AsyncStorage.getItem("myMovies");
    
    return  !myMovies ? [] : JSON.parse(myMovies);
  };

  const onSearchMovieDB = (search) => {
    if (search.length !== 0) {
      setSearchState(true);

      movieService.getMovieFromSearch(1, search).then((movies) => {
        setDataList(movies);
      });
    } else {
      setSearchState(false);

      movieService.getPopularMovies(1).then((movies) => {
        setDataList(movies);
      });
    }
  };

  const onSearchMyMovies = (search) => {
    if (search.length !== 0) {
      setSearchState(true);

      setDataList(
        [...myMovies].filter(
          (item) => item.title.search(RegExp(search, "ig")) !== -1
        )
      );
    } else {
      setSearchState(false);

      movieService.getPopularMovies(1).then((movies) => {
        setDataList(movies);
      });
    }
  };

  const onWatchedMovie = (id, title) => {
    if (listUnWatched.indexOf(id) === -1 && listWatched.indexOf(id) === -1) {
      setMyMovie([...myMovies, { id, title }]);
      setListUnWatched([...listUnWatched, id]);
    }
  };

  const onChangeMovieWatched = (id, checked) => {
    if (checked) {
      if (listWatched.indexOf(id) === -1) {
        setListWatched([...listWatched, id]);

        let newArr = [...listUnWatched];
        let idWatched = newArr.indexOf(id);
        if (idWatched !== -1) {
          newArr.splice(idWatched, 1);
          setListUnWatched(newArr);
        }
      }
    } else {
      let newArr = [...listWatched];
      let idWatched = newArr.indexOf(id);
      if (idWatched !== -1) {
        newArr.splice(idWatched, 1);
        setListWatched(newArr);
      }

      if (listUnWatched.indexOf(id) === -1) {
        setListUnWatched([...listUnWatched, id]);
      }
    }
  };

  const onCkeckedWatched = (checked) => {
    setCheckWatched(checked);
  };

  const onCkeckedUnwatched = (checked) => {
    setCheckUnWatched(checked);
  };

  const refreshList = (viewList) => {
    setListFilms(
      [...viewList].filter((item) => {
        return (
          (checkUnWatched && listUnWatched.indexOf(item.id) !== -1) ||
          (checkWatched && listWatched.indexOf(item.id) !== -1) ||
          (!checkWatched && !checkUnWatched)
        );
      })
    );
  };

  const itemList = ({ item }) => (
    <AccordionListItem title={item.title}>
      <CardMovie
        id={item.id}
        title={item.title}
        onWatched={onWatchedMovie}
        onChangeWatched={(checked) => onChangeMovieWatched(item.id, checked)}
        watched={listWatched.indexOf(item.id) !== -1}
      />
    </AccordionListItem>
  );

  return (
    <View style={styles.container}>
      <Text>This is MoviesScreen!</Text>

      <View style={styles.searchBlock}>
        <InputSearch placeholder="Search MovieDB" onSearch={onSearchMovieDB} />
        <InputSearch
          placeholder="Search My Movies"
          onSearch={onSearchMyMovies}
        />
      </View>

      <View style={styles.watchedFilterBlock}>
        <CheckBoxItem
          title="Unwatched"
          iconName="unwatched"
          onCheked={onCkeckedUnwatched}
        />
        <CheckBoxItem
          title="Watched"
          iconName="watched"
          onCheked={onCkeckedWatched}
        />
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
  searchBlock: {
    width: "90%",
  },
});

export default MoviesScreen;
