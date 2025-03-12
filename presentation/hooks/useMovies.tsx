import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  
  // Retornar peliculas en cartelera
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // Se almacenará en caché por 24 horas
  });

  // Retornar peliculas populares
  const popularMoviesQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // Se almacenará en caché por 24 horas
  });

  // Retornar mejor calificadas
  const topRatedMoviesQuery = useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // Se almacenará en caché por 24 horas
  });

  // Retornar peliculas proximas a estrenar
  const upcomingMoviesQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // Se almacenará en caché por 24 horas
  });
  
  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  };
};
