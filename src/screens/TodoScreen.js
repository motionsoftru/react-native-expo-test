import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { EditModal } from "../components/EditModal";
import { AppButton } from "../components/ui/AppButton";
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

        <AppButton onPress={() => setModal(!modal)} color={THEME.INFO_COLOR}>
          <FontAwesome name="edit" size={THEME.BUTTONS_FONT_SIZE} />{" "}
          {I18N.RU.EDIT_BTN}
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          {/* <Button
            title={I18N.RU.BACK_BTN}
            onPress={goBack}
            color={THEME.DEFAULT_COLOR}
          /> */}
          <AppButton onPress={goBack} color={THEME.DEFAULT_COLOR}>
            <AntDesign
              name="back"
              size={THEME.BUTTONS_FONT_SIZE}
              color="#fff"
            />{" "}
            {I18N.RU.BACK_BTN}
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton onPress={onLongPressHandler} color={THEME.DANGER_COLOR}>
            <FontAwesome name="remove" size={THEME.BUTTONS_FONT_SIZE} />{" "}
            {I18N.RU.DELETE_BTN}
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: THEME.BUTTONS_WRAPPER,
  button: {
    ...THEME.BUTTONS_WRAPPER_BUTTON,
    width: Dimensions.get("window").width > 450 ? 200 : 120,
  },
  title: {
    marginBottom: 20,
    //fontSize: 20,
    //fontWeight: "900",
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
  },
});
