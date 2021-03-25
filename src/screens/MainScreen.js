import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
      )}
    />
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
