import React, { useContext } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ScreenContext } from "../context/screen/screenContext";
import { Navbar } from "../components/Navbar";
import { AppButton } from "../components/ui/AppButton";
import { MainScreen } from "../screens/MainScreen";
import { TodoScreen } from "../screens/TodoScreen";
import { I18N } from "../i18n/i18n";
import { THEME } from "../themes/theme";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  const exitHandler = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Navbar title={I18N.RU.APP_NAME} />
      <View style={styles.screens}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
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
