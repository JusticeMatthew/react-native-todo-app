import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';
import tempData from '../tempData';

export default AddListModal = ({ closeModal, addList }) => {
  const bgColors = [
    '#5CD859',
    '#24A6D9',
    '#595BD9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];

  const [name, setName] = useState('');
  const [color, setColor] = useState(bgColors[0]);

  const createTodo = () => {
    const list = { name, color };

    addList(list);

    setName('');
    closeModal();
  };

  const renderColors = () => {
    return bgColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorPicker, { backgroundColor: color }]}
          onPress={() => setColor(color)}
        />
      );
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TouchableOpacity
        onPress={closeModal}
        style={{ position: 'absolute', top: 64, right: 32 }}
      >
        <AntDesign name='close' size={24} color={colors.black} />
      </TouchableOpacity>
      <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
        <Text style={styles.title}>Create Todo List</Text>

        <TextInput
          style={styles.input}
          placeholder='List Name'
          onChangeText={(text) => setName(text)}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}
        >
          {renderColors()}
        </View>

        <TouchableOpacity
          style={[styles.createList, { backgroundColor: color }]}
          onPress={createTodo}
        >
          <Text
            style={{ color: 'whitesmoke', fontWeight: 'bold', fontSize: 18 }}
          >
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
    marginBottom: 16,
  },

  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },

  createList: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  colorPicker: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
