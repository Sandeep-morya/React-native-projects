import {Text, StyleSheet, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface ButtonProps extends PropsWithChildren {
  onPress: () => void;
}

export default function Button({children, onPress}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={style.wrapper}>
      <Text style={style.title}>{children}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
