class MoviesService {
  _baseURL = "https://api.themoviedb.org/3";
  _baseImage = "https://image.tmdb.org/t/p/w500";

  _apiKey = "api_key=61917225086d3cdaa193f2565ef5563f";
  _language = "language=en-US";

  _popularMovies = "/movie/popular";
  _movie = "/movie/";

  pageString = (pageNum) => (pageNum ? `page=${pageNum}` : "");
  movieUrl = (id) => `${this._movie}${id}`;

  async getData(url, page="") {
    let fullUrl = `${this._baseURL}${url}?${this._apiKey}&${this._language}&${page}`;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`We have a problem with fetch ${url}!!!`);
    }
    return await response.json();
  }

  getPopularMovies = async (page) => {
    const response = await this.getData(
      this._popularMovies,
      this.pageString(page)
    );
    return response.results.map(this.transformPopularMovies);
  };

  getMovieFromId = async (id) => {
    const response = await this.getData(this.movieUrl(id));
    return this.transformMovie(response);
  };

  transformMovie = (movie) => {
    return {
      dateRelease: movie.release_date,
      posterPath: `${this._baseImage}${movie.poster_path}`,
      runtime: movie.runtime,
      averageRate: movie.vote_average,
      overview: movie.overview,
    };
  };

  transformPopularMovies = (movie) => {
    return {
      id: movie.id,
      title: movie.title,
    };
  };
}

export default MoviesService;
