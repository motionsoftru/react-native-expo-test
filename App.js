import React, { useState } from "react";
import { StyleSheet, View, Alert, Button, BackHandler } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { I18N } from "./src/i18n/i18n";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import { THEME } from "./src/themes/theme";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([{ id: "1", title: "Один" }]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
      },
    ]);
  };

  const removeTodo = (deleteTodo) => {
    Alert.alert(I18N.RU.DELETING_TASK_TITLE, I18N.RU.DELETING_TASK_TEXT, [
      {
        text: I18N.RU.DELETE_BTN,
        style: "destructive",
        onPress: () => {
          setTodoId(null);
          setTodos((prev) => prev.filter((todo) => todo.id !== deleteTodo.id));
        },
      },
      {
        text: I18N.RU.CANCEL_BTN,
        style: "cancel",
      },
    ]);
  };

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  const exitHandler = () => {
    BackHandler.exitApp();
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
    screen = (
      <TodoScreen
        removeTodo={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Navbar title={I18N.RU.APP_NAME} />
      <View style={styles.screens}>{screen}</View>
      <View style={styles.buttons}>
        <Button
          title={I18N.RU.EXIT_BTN}
          onPress={exitHandler}
          color={THEME.DEFAULT_COLOR}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screens: {
    paddingHorizontal: 20,
  },
  buttons: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
