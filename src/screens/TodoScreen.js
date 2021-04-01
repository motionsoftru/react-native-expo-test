import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/AppTextBold";
import { I18N } from "../i18n/i18n";
import { THEME } from "../themes/theme";

export const TodoScreen = ({ removeTodo, goBack, todo, onSave }) => {
  const onLongPressHandler = () => {
    removeTodo(todo);
  };

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  const [modal, setModal] = useState(false);

  return (
    <View>
      <EditModal
        visible={modal}
        onCansel={() => setModal(false)}
        value={todo.title}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <Button
          title={I18N.RU.EDIT_BTN}
          color={THEME.INFO_COLOR}
          onPress={() => setModal(!modal)}
        />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title={I18N.RU.BACK_BTN}
            onPress={goBack}
            color={THEME.DEFAULT_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={I18N.RU.DELETE_BTN}
            onPress={onLongPressHandler}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: THEME.BUTTONS_WRAPPER,
  button: THEME.BUTTONS_WRAPPER_BUTTON,
  title: {
    //fontSize: 20,
    //fontWeight: "900",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
