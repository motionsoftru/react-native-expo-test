import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { THEME } from "../../themes/theme";
import { AppText } from "./AppText";

export const AppButton = ({
  children,
  onPress,
  color = THEME.DEFAULT_COLOR,
}) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View
        style={StyleSheet.compose(styles.button, { backgroundColor: color })}
      >
        <AppText style={styles.text}>{children}</AppText>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: THEME.BUTTONS_BORDER_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: THEME.BUTTONS_FONT_SIZE,
  },
});
