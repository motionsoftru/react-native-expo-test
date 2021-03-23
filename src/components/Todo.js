import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove, onOpen }) => {
  const onLongPressHandler = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => onOpen(todo.id)}
      //onPress={() => console.log("todo id = " + todo.id)}
      //onLongPress={() => onRemove(todo.id)}
      //onLongPress={onRemove.bind(null, todo.id)}
      onLongPress={onLongPressHandler}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(50,50,50,0.1)",
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
