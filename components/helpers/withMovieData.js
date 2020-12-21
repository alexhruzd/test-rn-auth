import React, { useEffect, useState } from "react";

const withMovieData = (Component, getData) => {
  return (props) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
      getData(props.id).then((movie) => {
        setMovie(movie);
        props.onWatched(props.id, props.title);
      });

    }, []);

    return (
      <Component
        posterPath={movie.posterPath}
        dateRelease={movie.dateRelease}
        runtime={movie.runtime}
        averageRate={movie.averageRate}
        overview={movie.overview}
        {...props}
      />
    );
  };
};

export default withMovieData;
