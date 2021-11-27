import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height } = Dimensions.get("screen");

const StickyTabScreen = (props) => {
  const [stickyHeader, setStickyHeader] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const { top } = useSafeAreaInsets();

  const topEdge = stickyHeader?.y;

  console.log("Log TopEdge: ", { topEdge, stickyHeader });

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("Scroll Y: ", scrollY);
  });

  return (
    <View style={{ flex: 1, marginTop: top }}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <View style={{ height: height * 1.5, backgroundColor: "blue" }} />
        <View
          onLayout={(ev) => {
            setStickyHeader(ev.nativeEvent.layout);
          }}
          style={{
            height: 45,
            width: "100%",
            backgroundColor: "white",
          }}
        ></View>
        <View style={{ height: height * 3, backgroundColor: "blue" }} />
      </Animated.ScrollView>
      {stickyHeader ? (
        <Animated.View
          style={{
            height: 45,
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            opacity: scrollY.interpolate({
              inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
              outputRange: [0, 0, 0, 0, 1],
              extrapolate: 'clamp'
            }),
          }}
        >
          <Animated.View
            style={{
              height: 45,
              width: "100%",
              backgroundColor: "red",
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
                    outputRange: [-45, -45, -45, 0, 0],
                  }),
                },
              ],
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                alert("Touched");
              }}
            >
              <Text>Touch me</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default StickyTabScreen;
