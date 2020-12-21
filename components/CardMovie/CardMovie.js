import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MoviesService from "../../services/MoviesService";
import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";
import withMovieData from "../helpers/withMovieData";

const { getMovieFromId } = new MoviesService();

export const CardMovie = ({
  posterPath,
  dateRelease,
  runtime,
  averageRate,
  overview,
  onChangeWatched, 
  watched
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: posterPath }} />

      <View style={styles.info}>
        <Text>Date release: {dateRelease}</Text>
        <Text>Runtime: {runtime}</Text>
        <Text>IMDB Score: {averageRate}</Text>
        <Text style={{ marginTop: 10 }}>{overview}</Text>

        <CheckBoxItem title="Watched" flexDirection="row" onCheked={onChangeWatched} checked={ watched }/>
      </View>
    </View>
  );
};

export default withMovieData(CardMovie, getMovieFromId);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    width: "60%",
  },
});
