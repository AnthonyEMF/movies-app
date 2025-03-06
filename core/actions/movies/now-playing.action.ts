import { moviesApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () : Promise<Movie[]> => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>(`/now_playing`);
    
    const movies = data.results.map(movieDbMovie => MovieMapper.fromTheMovieDbToMovie(movieDbMovie));

    console.log(JSON.stringify(movies, null, 2)); // Ordenar data de la petición

    return movies;

  } catch (error) {
    console.log(error);
    throw "No se pudo obtener las películas";
  }
};
