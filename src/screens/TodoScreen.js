import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { THEME } from "../ui/theme";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" onPress={goBack} color={THEME.DEFAULT_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            onPress={() => console.log("Delet")}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  button: {
    width: "40%",
  },
});
