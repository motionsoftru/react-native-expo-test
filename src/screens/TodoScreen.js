import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../themes/theme";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Редактировать" color={THEME.INFO_COLOR} />
      </AppCard>
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
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
