import {useCallback, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import React from 'react';

const PRIMARYCOLOR = 'bg-[#262626]';
const SECONDARYCOLOR = 'bg-[#be123c]';

const Button = ({
  title,
  onPress,
  bg,
}: {
  title: string;
  onPress: () => void;
  bg: string;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-full w-[80px] h-[80px] justify-center items-center shadow ${bg}`}>
      <Text className="text-white text-[30px] text-white">{title}</Text>
    </Pressable>
  );
};

const Resulter = ({equation, total}: {equation: string; total: string}) => {
  return (
    <View
      aria-labelledby="result&calculations"
      className="w-full h-[280px] bg-gray-100 p-2">
      <View className="w-full h-[50%] items-end justify-center">
        <Text className="text-[30px] tracking-widest text-right text-black">
          {equation}
        </Text>
      </View>
      <View className="flex-1 items-end justify-center">
        <Text className="text-[70px] font-bold text-black">{total || '0'}</Text>
      </View>
    </View>
  );
};

export default function App() {
  const [equation, setEquation] = useState('');
  const [total, setTotal] = useState('0');

  const handleAddEquation = useCallback((char: string) => {
    setEquation(prev => prev + char);
  }, []);

  const handleClearEquation = useCallback(() => {
    setEquation('');
  }, []);

  const handleClearOnByOne = useCallback(() => {
    setEquation(prev => prev.substring(0, prev.length - 1));
  }, []);

  const handleTotal = useCallback(() => {
    setTotal(prev => {
      if (prev[0] === '=') {
        return prev;
      } else {
        handleClearEquation();
        return '= ' + prev;
      }
    });
  }, [handleClearEquation]);

  const buttons = [
    [
      {title: 'AC', onPress: handleClearEquation, bg: PRIMARYCOLOR},
      {title: '()', onPress: () => handleAddEquation('()'), bg: PRIMARYCOLOR},
      {title: '%', onPress: () => handleAddEquation('%'), bg: PRIMARYCOLOR},
      {title: '/', onPress: () => handleAddEquation('/'), bg: SECONDARYCOLOR},
    ],
    [
      {title: '7', onPress: () => handleAddEquation('7'), bg: PRIMARYCOLOR},
      {title: '8', onPress: () => handleAddEquation('8'), bg: PRIMARYCOLOR},
      {title: '9', onPress: () => handleAddEquation('9'), bg: PRIMARYCOLOR},
      {title: '*', onPress: () => handleAddEquation('*'), bg: SECONDARYCOLOR},
    ],
    [
      {title: '4', onPress: () => handleAddEquation('4'), bg: PRIMARYCOLOR},
      {title: '5', onPress: () => handleAddEquation('5'), bg: PRIMARYCOLOR},
      {title: '6', onPress: () => handleAddEquation('6'), bg: PRIMARYCOLOR},
      {title: '-', onPress: () => handleAddEquation('-'), bg: SECONDARYCOLOR},
    ],
    [
      {title: '1', onPress: () => handleAddEquation('1'), bg: PRIMARYCOLOR},
      {title: '2', onPress: () => handleAddEquation('2'), bg: PRIMARYCOLOR},
      {title: '3', onPress: () => handleAddEquation('3'), bg: PRIMARYCOLOR},
      {title: '+', onPress: () => handleAddEquation('+'), bg: SECONDARYCOLOR},
    ],
    [
      {title: 'C', onPress: handleClearOnByOne, bg: PRIMARYCOLOR},
      {title: '0', onPress: () => handleAddEquation('0'), bg: PRIMARYCOLOR},
      {title: '.', onPress: () => handleAddEquation('.'), bg: PRIMARYCOLOR},
      {title: '=', onPress: handleTotal, bg: SECONDARYCOLOR},
    ],
  ];

  useEffect(() => {
    if (['+', '-', '*', '/'].some(e => e === equation.slice(-1))) {
      return;
    }
    try {
      setTotal(eval(equation));
    } catch (error) {}
  }, [equation]);

  return (
    <View className="flex-1 border-red-400">
      <Resulter {...{equation, total}} />
      <View aria-labelledby="buttons" className="flex-1 bg-white p-2 gap-2">
        {buttons.map((row, index) => (
          <View key={index} className="flex flex-row justify-between">
            {row.map(e => (
              <Button key={e.title} {...e} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
