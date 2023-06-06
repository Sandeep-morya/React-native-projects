import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React, {useCallback, useState} from 'react';
import Form from './components/Form';
import RadioButton from './components/RadioButton';

export interface TodoData {
  title: string;
  isCompleted: boolean;
}
export interface Todo extends TodoData {
  key: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((title: string) => {
    const key = Math.random().toString();
    const newTodo: Todo = {key, title, isCompleted: false};
    setTodos(e => [...e, newTodo]);
  }, []);

  const updateTodoStatus = useCallback((key: string) => {
    setTodos(items =>
      items.map(todo =>
        todo.key === key ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    );
  }, []);

  const handleDelete = useCallback((key: string) => {
    setTodos(items => items.filter(todo => todo.key !== key));
  }, []);

  console.log({todos});
  return (
    <View style={style.container}>
      <Text style={style.heading}>TODO - APP</Text>
      <Form addTodo={addTodo} />
      <FlatList
        style={style.list}
        data={todos}
        renderItem={({item: {key, title, isCompleted}}) => (
          <View style={style.list_item}>
            <View style={style.title_status_wrapper}>
              <RadioButton
                checked={isCompleted}
                onSelect={() => {
                  updateTodoStatus(key);
                }}
              />
              <Text style={style.list_item_title}>{title}</Text>
            </View>
            <Button
              onPress={() => handleDelete(key)}
              title={'delete'}
              color={'orangered'}
            />
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
  },
  list: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 5,
  },
  list_item: {
    padding: 15,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title_status_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  list_item_title: {color: 'black', fontSize: 18, fontWeight: '600'},
});
