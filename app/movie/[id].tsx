import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";

const MovieScreen = () => {

  // obtener id de la película
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(Number(id)); // convertimos a number porque el id viene como string

  // pantalla de carga
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} color={"purple"} />
        <Text className="text-2xl font-semibold mt-2">Cargando...</Text>
      </View>
    );
    
  }

  return (
    <ScrollView>
      <MovieHeader 
        poster={movieQuery.data?.poster ?? ""}
        title={movieQuery.data?.title ?? ""}
        originalTitle={movieQuery.data?.originalTitle ?? ""}
      />
      <MovieDescription
        movie={movieQuery.data}
      />
    </ScrollView>
  );
};

export default MovieScreen;
