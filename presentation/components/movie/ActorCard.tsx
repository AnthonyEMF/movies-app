import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { View, Text, Image } from "react-native";

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: `${actor.avatar}` }}
        className="w-[100px] h-[150px] rounded-2xl shadow"
        resizeMode="cover"
      />
      <View>
        <Text 
          numberOfLines={2} 
          adjustsFontSizeToFit 
          className="font-bold mt-2"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

export default ActorCard;
