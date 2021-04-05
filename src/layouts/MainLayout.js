import React, { useContext } from "react";
import { View, StyleSheet, Alert, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";
import { Navbar } from "../components/Navbar";
import { AppButton } from "../components/ui/AppButton";
import { MainScreen } from "../screens/MainScreen";
import { TodoScreen } from "../screens/TodoScreen";
import { I18N } from "../i18n/i18n";
import { THEME } from "../themes/theme";

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  //   const removeTodo = (deleteTodo) => {
  //     Alert.alert(I18N.RU.DELETING_TASK_TITLE, I18N.RU.DELETING_TASK_TEXT, [
  //       {
  //         text: I18N.RU.DELETE_BTN,
  //         style: "destructive",
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos((prev) => prev.filter((todo) => todo.id !== deleteTodo.id));
  //         },
  //       },
  //       {
  //         text: I18N.RU.CANCEL_BTN,
  //         style: "cancel",
  //       },
  //     ]);
  //   };

  const exitHandler = () => {
    BackHandler.exitApp();
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={changeScreen}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        removeTodo={removeTodo}
        goBack={() => changeScreen(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Navbar title={I18N.RU.APP_NAME} />
      <View style={styles.screens}>{content}</View>
      <View style={styles.buttons}>
        <AppButton onPress={exitHandler} color={THEME.DEFAULT_COLOR}>
          <AntDesign
            name="closesquareo"
            size={THEME.BUTTONS_FONT_SIZE}
            color="#fff"
          />{" "}
          {I18N.RU.EXIT_BTN}
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.APP_BACKGROUND,
  },
  screens: {
    paddingHorizontal: THEME.APP_PADDING_H,
  },
  buttons: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
