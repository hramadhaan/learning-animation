import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DATA = [
  {
    id: 1,
    name: "Sticky Tab Animation",
    component: "StickyTab",
  },
//   {
//     id: 2,
//     name: "Sticky Tab Animation",
//     component: "StickyTab",
//   },
];

const { width, height } = Dimensions.get("screen");

const MainScreen = (props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 12 }}
        keyExtractor={(_, index) => index.toString()}
        data={DATA}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 12,
                paddingHorizontal: 4,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(item.component);
                }}
                style={{
                  width: width * 0.25,
                  height: width * 0.085,
                  backgroundColor: "blue",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Let's go
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MainScreen;
