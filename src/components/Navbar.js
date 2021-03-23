import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../ui/theme";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.DEFAULT_COLOR,
    paddingBottom: 10,
  },
  text: {
    color: "#ffffff",
    //textTransform: 'uppercase',
    fontSize: 20,
  },
});
