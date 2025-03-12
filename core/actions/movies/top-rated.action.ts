import { moviesApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

// Llamar endpoint GET de NowPlaying desde la API
export const topRatedMoviesAction = async () : Promise<Movie[]> => {
  try {
    // Con Paste JSON convertimos la respuesta en una interfaz de TypeScript
    const { data } = await moviesApi.get<MovieDBMoviesResponse>(`/top_rated`);
    
    const movies = data.results.map(movieDbMovie => MovieMapper.fromTheMovieDbToMovie(movieDbMovie));

    //console.log(JSON.stringify(movies, null, 2)); // Prueba para mostrar en consola

    return movies;

  } catch (error) {
    console.log(error);
    throw "No se pudo obtener las películas";
  }
};
