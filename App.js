import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
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

  let screen = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
  );

  if (todoId) {
    screen = <TodoScreen />;
  }

  return (
    <View style={styles.container}>
      <Navbar title="My app" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
