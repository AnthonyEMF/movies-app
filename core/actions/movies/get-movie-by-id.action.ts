import { moviesApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number) : Promise<CompleteMovie> => {
  try {

    // url de la petición: https://api.themoviedb.org/3/movie/100
    
    const { data } = await moviesApi.get<MovieDBMovieResponse>(`/${id}`);

    console.log('Pelicula obtenida');

    return MovieMapper.fromTheMovieDbToCompleteMovie(data);

  } catch (error) {
    console.log(error);
    throw "No se pudo obtener la película";
  }
};