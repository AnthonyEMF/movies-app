import { moviesApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options): Promise<Movie[]> => {
  try {

    const { data } = await moviesApi.get<MovieDBMoviesResponse>(`/top_rated`, {
      params: {
        page,
        limit,
      }
    });

    const movies = data.results.map((movieDbMovie) =>
      MovieMapper.fromTheMovieDbToMovie(movieDbMovie)
    );

    //console.log(JSON.stringify(movies, null, 2)); // Prueba para mostrar en consola

    return movies;
  } catch (error) {
    console.log(error);
    throw "No se pudo obtener las películas";
  }
};
