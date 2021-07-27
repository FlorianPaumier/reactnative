import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

const ListForm: Node = ({ show, add, type }) => {

  const [text, onChangeText] = React.useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleSwitch = () => {
    setIsCompleted(!isCompleted);
  };

  const save = () => {
    add({ key: 0, name: text, done: isCompleted, date:"", coord: "" }, "task");
  };

  return (<View>
    {show && (
      <SafeAreaView>
        <View><Text>Name</Text><TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /></View>
        <View>
          <Text>Completed</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isCompleted ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isCompleted}
          />
        </View>
        {type === "task" && (
          <>
            <View><Text>Date</Text><TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="useless placeholder"
              keyboardType="numeric"
            /></View>
            <View><Text>Coord.</Text><TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="useless placeholder"
              keyboardType="numeric"
            /></View>
          </>
        )}
        <Button title={"Valider"} onPress={save} />
      </SafeAreaView>
    )}</View>);
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default ListForm;
