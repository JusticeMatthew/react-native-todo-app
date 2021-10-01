import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default TodoList = ({ list }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },

  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'whitesmoke',
    marginBottom: 18,
  },

  count: {
    fontSize: 48,
    color: 'whitesmoke',
  },

  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
});
