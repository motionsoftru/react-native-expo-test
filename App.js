import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Navbar title="My app" />
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
