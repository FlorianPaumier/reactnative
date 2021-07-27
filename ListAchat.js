import React from "react";
import { Text, View } from "react-native";


const ListAchat : Node = ({show, hide}) => {

  return (<View>
    {show && (
      <Text>Hello Achat</Text>
    )}
  </View>)
}

export default ListAchat;
