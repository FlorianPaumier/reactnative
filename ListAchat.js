import React, { useState } from "react";
import { FlatList, StyleSheet, Switch, Text, View } from "react-native";


const ListAchat: Node = ({ show, hide }) => {

  const [data, setData] = useState([
    { key: 0, name: "Devin", done: false },
    { key: 1, name: "Dan", done: false },
    { key: 2, name: "Dominic", done: false },
    { key: 3, name: "Jackson", done: false },
    { key: 4, name: "James", done: false },
    { key: 5, name: "Joel", done: false },
    { key: 6, name: "John", done: false },
    { key: 7, name: "Jillian", done: false },
    { key: 8, name: "Jimmy", done: false },
    { key: 9, name: "Julie", done: false },
  ]);

  const toggleSwitch = (e) => {
    console.log(e)
      setData(data.map((item) => {
        if(item.name === e){
          item.done = !item.done;
        }

        return item;
      }))
  };

  return (
    <View>
      {show && (
        <FlatList
          data={data}
          renderItem={({ item }) => <View><Text style={styles.item}>{item.name}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={item.done ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(item.name)}
              value={item.done}
            />
          </View>}
        />
      )}
    </View>);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListAchat;
