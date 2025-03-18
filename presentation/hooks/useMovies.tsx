import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  
  // Retornar peliculas en cartelera
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // Se almacenará en caché por 24 horas
  });

  // Retornar peliculas populares con parametros de paginación
  const popularMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'popular'],
    queryFn: ({pageParam}) => {
      return popularMoviesAction({page: pageParam});
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  // Retornar peliculas mejor calificadas con parametros de paginación
  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'],
    queryFn: ({pageParam}) => {
      return topRatedMoviesAction({page: pageParam});
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  // Retornar peliculas proximas a estrenar con parametros de paginación
  const upcomingMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'upcoming'],
    queryFn: ({pageParam}) => {
      return upcomingMoviesAction({page: pageParam});
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
  
  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  };
};
