import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SectionList,
  RefreshControl,
} from 'react-native';
import React, {useCallback} from 'react';

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([
    {title: 'Group-1', data: ['member-1', 'member-2', 'member-3']},
  ]);

  const addNewDataInList = useCallback(() => {
    setData(previousData => {
      const groupLength = previousData.length;
      const newGroup = {
        title: `Group-${groupLength + 1}`,
        data: [
          `member-${groupLength * 3 + 1}`,
          `member-${groupLength * 3 + 2}`,
          `member-${groupLength * 3 + 3}`,
        ],
      };
      setTimeout(() => {
        setRefreshing(false);
      }, 1500);
      return [...previousData, newGroup];
    });
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={addNewDataInList}
            />
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    padding: 10,
    textTransform: 'capitalize',
  },
  header: {
    color: 'black',
    backgroundColor: '#00000010',
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
