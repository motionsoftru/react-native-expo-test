import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../themes/theme";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let [flatListWidth, setFlatListWidth] = useState(
    Dimensions.get("window").width - THEME.APP_PADDING_H * 2
  );

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get("window").width - THEME.APP_PADDING_H * 2;
      setFlatListWidth(width);
    };
    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  let content = (
    <View style={{ width: flatListWidth }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
        {/* <Image
          style={styles.image}
          source={{
            uri:
              "https://img2.freepng.ru/20180522/fbb/kisspng-computer-icons-institute-of-inspection-cleaning-an-award-certificate-5b0401dc427f84.3069769415269892762724.jpg",
          }}
        /> */}
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
