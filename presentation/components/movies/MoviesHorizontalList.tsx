import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import MoviePoster from "./MoviePoster";
import { useRef } from "react";

interface Props {
  movies: Movie[];
  title: string;
  loadNextPage?: () => void; 
}

const MoviesHorizontalList = ({ title, movies, loadNextPage }: Props) => {

  const isLoading = useRef(false);

  const onScroll = (event:  NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) {
      return;
    }

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if (!isEndReached) {
      return;
    }

    isLoading.current = true;

    //console.log('Cargar siguiente página');
    
    loadNextPage && loadNextPage();
  }

  return (
    <View>
      <Text className="text-2xl font-bold px-4 mb-2 mt-4">{title}</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster/>
        )} 
        onScroll={onScroll} 
      />
    </View>
  );
};

export default MoviesHorizontalList;
