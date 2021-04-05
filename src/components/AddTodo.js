import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AppButton } from "../components/ui/AppButton";
import { I18N } from "../i18n/i18n";
import { THEME } from "../themes/theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert(I18N.RU.ERROR_TITLE, I18N.RU.TASK_NAME_CANNOT_BE_EMPTY, [
        {
          text: I18N.RU.CLOSE_BTN,
          style: "cancel",
        },
      ]);
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={I18N.RU.ENTER_NAME_TASK}
        autoCorrect={false}
        autoCapitalize="none"
        //keyboardType='phone-pad'
      />
      <AppButton onPress={handler} color={THEME.INFO_COLOR}>
        <AntDesign name="addfile" size={THEME.BUTTONS_FONT_SIZE} />
      </AppButton>
      {/* <AntDesign.Button onPress={handler} name="addfile">
        {I18N.RU.ADD_BTN}
      </AntDesign.Button> */}
      {/* <AntDesign name="addfile" size={24} color="black" /> */}
      {/* <Button title={I18N.RU.ADD_BTN} onPress={handler} /> */}
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
    ...THEME.TEXT_INPUT,
  },
});
