import { Cast } from "../interfaces/cast.interface";
import { MovieDbCast } from "../interfaces/moviedb-credits.response";

export class CastMapper {
  static fromTheMovieDbCastToEntity(actor: MovieDbCast) : Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No personaje',
      avatar: actor.profile_path 
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.sstatic.net/l60Hf.png', // imagen por default si no existe
    }
  }
}
