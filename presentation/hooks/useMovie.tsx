import { getMovieByIdAction } from "@/core/actions/movies/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
    
  const movieQuery = useQuery({
    queryKey: ["movie", id], // llave para guardar en cache
    queryFn: () => getMovieByIdAction(id), // función que se ejecuta para obtener los datos
    staleTime: 1000 * 60 * 60 * 24, // tiempo de vida en cache (24 horas)
  });

  return {
    movieQuery,
  };
};
