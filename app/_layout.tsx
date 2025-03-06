import { View, Text } from 'react-native';
import React from 'react';
import '../global.css';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {

  //nowPlayingAction();

  return (
    <View>
      <Text className='text-3xl text-center'>RootLayout</Text>
    </View>
  )
}

export default RootLayout