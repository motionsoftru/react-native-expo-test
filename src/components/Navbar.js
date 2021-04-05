import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { THEME } from "../themes/theme";

export const Navbar = (props) => {
  return (
    <View
      style={StyleSheet.compose(
        styles.navbar,
        Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        })
      )}
    >
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.DEFAULT_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.DEFAULT_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === "android" ? "#ffffff" : THEME.DEFAULT_COLOR,
    //textTransform: 'uppercase',
    fontSize: 20,
  },
});
