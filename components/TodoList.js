import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import TodoModal from './TodoModal';

export default TodoList = ({ list, updateList }) => {
  const [listVisible, setListVisible] = useState(false);

  const toggleListModal = () => {
    setListVisible(!listVisible);
  };

  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  return (
    <View>
      <Modal
        animationType='slide'
        visible={listVisible}
        onRequestClose={toggleListModal}
      >
        <TodoModal
          list={list}
          closeModal={() => toggleListModal()}
          updateList={updateList}
        />
      </Modal>

      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={() => toggleListModal()}
      >
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
      </TouchableOpacity>
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
