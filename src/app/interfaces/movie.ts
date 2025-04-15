interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

interface Imdb {
  _id: string;
  id: number;
  rating: number;
  votes: number;
}

interface Rating {
  _id: string;
  meter: number;
  numReviews: number;
  rating: number;
}

export interface IMovies {
  _id: string;
  awards: Awards;
  cast: string[];
  countries: string[];
  directors: string[];
  fullplot: string;
  genres: string[];
  imdb: Imdb;
  languages: string[];
  lastupdated: string;
  num_mflix_comments: number;
  plot: string;
  poster: string;
  released: Date;
  runtime: number;
  title: string;
  rated: string;
  tomatoes: {
    _id: string;
    fresh: number;
    rotten: number;
    lastUpdated: string;

    viewer: Rating;
    critic: Rating;
  };
  type: string;
  writers: string[];
  year: number;
}
