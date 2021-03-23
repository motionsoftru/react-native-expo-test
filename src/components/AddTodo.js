import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../themes/theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Ошибка", "Название дела не может быть пустым");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название дела"
        autoCorrect={false}
        autoCapitalize="none"
        //keyboardType='phone-pad'
      />
      <Button title="Добавить" onPress={handler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: THEME.DEFAULT_COLOR,
  },
});
