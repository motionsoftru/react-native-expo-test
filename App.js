import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "Один" },
    { id: "2", title: "Два" },
  ]);

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
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    screen = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />;
  }

  return (
    <View style={styles.container}>
      <Navbar title="My app" />
      <View style={styles.screens}>{screen}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  screens: {
    paddingHorizontal: 20,
  },
});
