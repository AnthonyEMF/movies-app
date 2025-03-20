import { moviesApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    // url de la petición: https://api.themoviedb.org/3/movie/100/credits

    const { data } = await moviesApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`);

    // Primer forma (Más clara):
    // return data.cast.map((item) => CastMapper.fromTheMovieDbCastToEntity(item));

    // Segunda forma:
    return data.cast.map(CastMapper.fromTheMovieDbCastToEntity);

  } catch (error) {
    console.log(error);
    throw "No se pudo obtener la película";
  }
};
