import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import { ScreenContext } from "../screen/screenContext";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import { I18N } from "../../i18n/i18n";

export const TodoState = ({ children }) => {
  const inicialState = {
    todos: [{ id: "1", title: "Один" }],
  };

  const { changeScreen } = useContext(ScreenContext);

  const [state, dispatch] = useReducer(todoReducer, inicialState);

  const addTodo = (title) => dispatch({ type: ADD_TODO, title });

  const removeTodo = (id) => {
    const todo = state.todos.find((t) => t.id === id);

    Alert.alert(I18N.RU.DELETING_TASK_TITLE, I18N.RU.DELETING_TASK_TEXT, [
      {
        text: I18N.RU.DELETE_BTN,
        style: "destructive",
        onPress: () => {
          changeScreen(null);
          dispatch({ type: REMOVE_TODO, id });
        },
      },
      {
        text: I18N.RU.CANCEL_BTN,
        style: "cancel",
      },
    ]);
  };

  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
