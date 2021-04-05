import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { ScreenState } from "./src/context/screen/ScreenState";
import { TodoState } from "./src/context/todo/TodoState";
import { MainLayout } from "./src/layouts/MainLayout";

async function loadApp() {
  await Font({
    "openSans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "openSans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
}

export default function App() {
  const [isRaeady, setIsRaeady] = useState(false);

  if (!isRaeady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={(err) => console.log(err)}
        onFinish={setIsRaeady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
