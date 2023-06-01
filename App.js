/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';

const App: () => Node = () => {
  const scale = useSharedValue(1);
  scale.value = withRepeat(
    withTiming(2, {
      duration: 1000,
      easing: Easing.circle,
    }),
    -1,
    true,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  useDerivedValue(() => {
    console.log(scale.value)
  })

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={'dark-content'} />
      <Animated.View style={[styles.bubble, animatedStyle]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.darker,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff0000',
  },
});

export default App;
