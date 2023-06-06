import React, {useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';

interface RadioButtonProps {
  checked: boolean;
  onSelect: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({checked, onSelect}) => {
  const [active, setActive] = useState(checked);

  const handleToggle = () => {
    setActive(e => !e);
    onSelect();
  };

  return (
    <View>
      <Pressable
        style={[style.container, active && style.border_active]}
        onPress={handleToggle}>
        <View style={[style.empty, active && style.active]} />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'orangered',
    borderRadius: 30,
  },
  border_active: {borderColor: 'limegreen'},
  empty: {
    margin: 2,
    width: 15,
    height: 15,
    borderRadius: 30,
  },
  active: {
    backgroundColor: 'limegreen',
  },
});

export default RadioButton;
