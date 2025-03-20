import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/MainSlideShow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";

const HomeScreen = () => {
  // Definir area segura para no sobreponer el Notch o Isla Dinamica de la pantalla
  const safeArea = useSafeAreaInsets();

  // Obtener información de la API desde el hook
  const {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  } = useMovies();

  // Mostrar pantalla de carga
  if (
    nowPlayingQuery.isLoading ||
    popularMoviesQuery.isLoading ||
    topRatedMoviesQuery.isLoading ||
    upcomingMoviesQuery.isLoading
  ) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color="purple" size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="bg-white flex-1 mt-2" style={{ paddingTop: safeArea.top }}>

        {/* Titulo */}
        <Text className="text-3xl font-bold px-4">Movies App</Text>

        {/* Carrusel de imagenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Peliculas populares */}
        <MoviesHorizontalList
          movies={popularMoviesQuery.data?.pages.flat() ?? []}
          title="Películas Populares"
          loadNextPage={popularMoviesQuery.fetchNextPage}
        />

        {/* Peliculas mejor calificadas */}
        <MoviesHorizontalList
          movies={topRatedMoviesQuery.data?.pages.flat() ?? []}
          title="Películas Mejor Calificadas"
          loadNextPage={topRatedMoviesQuery.fetchNextPage}
        />

        {/* Peliculas proximas a estrenarse */}
        <MoviesHorizontalList
          movies={upcomingMoviesQuery.data?.pages.flat() ?? []}
          title="Proximas Películas"
          loadNextPage={upcomingMoviesQuery.fetchNextPage}
        />

        {/* Prueba para mostrar el JSON de respuesta */}
        {/* <Text>{JSON.stringify(nowPlayingQuery.data, null, 2)}</Text> */}
        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
