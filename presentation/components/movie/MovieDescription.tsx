import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text } from "react-native";

// lo recomendable es que se extraiga solo la información necesaria de la película
interface Props {
  movie: CompleteMovie; // extraer toda la información de la película
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5 pb-10">
      {/* Rating y generos */}
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(", ")}</Text>
      </View>
      {/* Resumen de la pelicula */}
      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>
      {/* Presupuesto */}
      <Text className="font-bold mt-2">{Formatter.currency(movie.budget)}</Text>
    </View>
  );
};

export default MovieDescription;
