import { router } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

interface Props {
  poster: string;
  id: number;
  className?: string;
  smallPoster?: boolean; 
}

const MoviePoster = ({ id, poster, className, smallPoster = false } : Props) => {
  return (
    <Pressable 
      className={`active:opacity-85 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image 
        source={{ uri: `${ poster }` }}
        className="w-full h-full shadow-lg rounded-2xl"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250
        }}
        resizeMode="cover"
      ></Image>
    </Pressable>
  );
};

export default MoviePoster;
