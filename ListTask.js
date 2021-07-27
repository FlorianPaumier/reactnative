import React from "react";
import { Text, View } from "react-native";


const ListTask : Node = ({show, hide}) => {

  return (<View>
    {show && (
      <Text>Hello Task</Text>
    )}
  </View>)
}

export default ListTask;
