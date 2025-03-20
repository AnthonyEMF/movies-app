import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCast from "@/presentation/components/movie/MovieCast";

const MovieScreen = () => {

  // obtener id de la película
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(Number(id)); // convertimos a number porque el id viene como string

  // pantalla de carga
  if (movieQuery.isLoading || !movieQuery.data || castQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} color={"purple"} />
        <Text className="text-2xl font-semibold mt-2">Cargando...</Text>
      </View>
    );
    
  }

  return (
    <ScrollView>
      {/* Poster */}
      <MovieHeader 
        poster={movieQuery.data?.poster ?? ""}
        title={movieQuery.data?.title ?? ""}
        originalTitle={movieQuery.data?.originalTitle ?? ""}
      />
      {/* Información */}
      <MovieDescription
        movie={movieQuery.data}
      />
      {/* Actores */}
      <MovieCast
        cast={castQuery.data ?? []}
      />
    </ScrollView>
  );
};

export default MovieScreen;
