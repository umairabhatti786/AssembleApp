import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={[styles.popupContainer, { zIndex: 99999 }]}>
      <ActivityIndicator size="small" color={"black"} />
    </View>
  );
};
const styles = StyleSheet.create({
  popupContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 9999,
  },
});
export default Loading;
