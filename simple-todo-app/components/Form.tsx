import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
interface FormProps {
  addTodo: (title: string) => void;
}

export default function Form({addTodo}: FormProps) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    addTodo(task);
    setTask('');
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.textInput}
        value={task}
        onChangeText={e => setTask(e)}
      />
      <Button onPress={handleAdd}>Add Task</Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    gap: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  textInput: {
    width: '100%',
    borderWidth: 2,
    fontSize: 16,
    padding: 10,
    borderColor: 'black',
    color: 'black',
    letterSpacing: 1,
    borderRadius: 10,
  },
});
