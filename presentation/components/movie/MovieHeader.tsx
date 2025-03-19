import { router } from "expo-router";
import { View, Text, Pressable, Image, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {

  // cambiamos el nombre de height a screenHeight para evitar conflictos
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      {/* Gradiente de fondo */}
      <LinearGradient 
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0,0]}
        style={{
          position: 'absolute',
          zIndex: 1,
          height: screenHeight * 0.4,
          width: '100%'
        }}
      />

      {/* Contenedor del botón de regresar */}
      <View className="absolute top-10 left-5 z-10">
        <Pressable className="" onPress={() => router.back()}> 
          <Ionicons 
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>

      {/* Contenido */}
      <View 
        style={{ 
          height: screenHeight * 0.7 
        }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] bg-black overflow-hidden">
          <Image 
            source={{ uri: poster }}
            resizeMode="cover"
            className="w-full h-full"
          />
        </View>
      </View>
      {/* Titulos */}
      <View className="px-5 mt-5">
        <Text className="font-normal">{originalTitle}</Text>
        <Text className="text-2xl font-semibold">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
