import React, { useReducer, useContext } from "react";
import { ScreenContext } from "../screen/screenContext";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }) => {
  const inicialState = {
    todos: [{ id: "1", title: "Один" }],
  };

  const { changeScreen } = useContext(ScreenContext);

  const [state, dispatch] = useReducer(todoReducer, inicialState);

  const addTodo = (title) => dispatch({ type: ADD_TODO, title });

  const removeTodo = (id) => {
    changeScreen(null);
    dispatch({ type: REMOVE_TODO, id });
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
