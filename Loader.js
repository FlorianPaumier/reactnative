import { ActivityIndicator, View, StyleSheet } from "react-native";
import React from "react";

const Loader = (show) => {

  if (show) {
    return <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>;
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  }
});

export default Loader;
