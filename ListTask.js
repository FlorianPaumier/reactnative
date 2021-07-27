import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Switch, Text, View } from "react-native";
import ListForm from "./ListForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListTask: Node = ({ show, hide }) => {

  const [showForm, setShowForm] = useState(false);

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

  useEffect(() => {
    getData();
  }, [show]);

  const toggleSwitch = (e) => {
    console.log(e);
    setData(data.map((item) => {
      if (item.key === e) {
        item.done = !item.done;
      }

      return item;
    }));
  };

  async function getData(type) {
    const result = await AsyncStorage.getItem("list-" + type);
    const values = result != null ? JSON.parse(result) : [];
    setData(values);
  }

  const add = async (value, type) => {
    value.key = Date.now();
    const items = [...data, value];
    try {
      await AsyncStorage.setItem(
        "list-" + type,
        JSON.stringify(items),
      );
      setData(items);
      showForm(false);
    } catch (error) {
      // Error saving data
    }
  };

  const deleteItem = async (item) => {
    const values = data.filter(value => {
      return item !== value;
    });

    try {
      await AsyncStorage.setItem(
        "list-task",
        JSON.stringify(values),
      );
      setData(values);
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <View>
      {show && (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <View>
                <Text style={styles.item}>{item.name}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={item.done ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch(item.key)}
                  value={item.done}
                />
                <Button title={"Delete"} onPress={() => deleteItem(item)} />
              </View>
            }
          />
          <Button title={"Add"} onPress={() => setShowForm(true)} />
          <ListForm show={showForm} add={add} type={"task"} />
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListTask;
