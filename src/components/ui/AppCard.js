import React from "react";
import { StyleSheet, View } from "react-native";
import { THEME } from "../../themes/theme";

export const AppCard = (props) => {
  return (
    <View style={StyleSheet.compose(styles.default, props.style)}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    shadowColor: THEME.DEFAULT_COLOR,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: "#FFF",
    borderRadius: 5,
    elevation: 8,
  },
});
