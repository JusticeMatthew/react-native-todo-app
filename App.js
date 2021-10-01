import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from './colors';
import tempData from './tempData';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';

export default function App() {
  const [addTodoVisible, setAddTodoVisible] = useState(false);

  const toggleAddTodoModal = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Modal
        animationType='slide'
        visible={addTodoVisible}
        onRequestClose={() => toggleAddTodoModal()}
      >
        <AddListModal
          closeModal={() => {
            toggleAddTodoModal();
          }}
        />
      </Modal>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Tuex <Text style={{ color: colors.blue }}>Duex</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addButton} onPress={toggleAddTodoModal}>
          <AntDesign name='plus' size={16} color={colors.blue} />
        </TouchableOpacity>

        <Text style={styles.addText}>Add List</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={tempData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TodoList list={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    backgroundColor: colors.lightBlue,
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.black,
    paddingHorizontal: 64,
  },

  addButton: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
  },
});
