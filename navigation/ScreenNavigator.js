import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//  Screens
import MainScreen from "../screens/MainScreen";
import StickyTabScreen from "../screens/StickyTabScreen";

const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Main" component={MainScreen} />
      <RootStack.Screen name="StickyTab" component={StickyTabScreen} />
    </RootStack.Navigator>
  );
};
