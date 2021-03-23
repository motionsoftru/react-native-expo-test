import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { I18N } from "../i18n/i18n";
import { THEME } from "../themes/theme";

export const EditModal = ({ visible, onCansel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        I18N.RU.ERROR_TITLE,
        I18N.RU.TASK_NAME_OF_CASE_CAN_NOT_THREE_CHARACTERS,
        [
          {
            text: I18N.RU.CLOSE_BTN,
            style: "cancel",
          },
        ]
      );
    } else {
      onSave(title);
    }
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder={I18N.RU.ENTER_NAME_TASK}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title={I18N.RU.SAVE_BTN}
              onPress={saveHandler}
              color={THEME.INFO_COLOR}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={I18N.RU.CANCEL_BTN}
              onPress={() => {
                setTitle(value);
                onCansel();
              }}
              color={THEME.DEFAULT_COLOR}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: THEME.MODAL_WRAPPER,
  buttons: THEME.BUTTONS_WRAPPER,
  button: THEME.BUTTONS_WRAPPER_BUTTON,
  input: { ...THEME.TEXT_INPUT },
});
