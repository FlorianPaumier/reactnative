import React, { useEffect, useState } from "react";
import { Button, PermissionsAndroid, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Loader from "./Loader";
import DatePicker from "react-native-modern-datepicker";
import Geolocation from 'react-native-geolocation-service';

const ListForm: Node = ({ show, add, type, isLoading}) => {

  const [text, onChangeText] = React.useState("");
  const [date, setDate] = React.useState("");
  const [coord, setCoord] = React.useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleSwitch = () => {
    setIsCompleted(!isCompleted);
  };

  const save = () => {
    add({ key: 0, name: text, done: isCompleted, date: date, coord: coord }, "task");
  };

  useEffect(() => {
    checkLocalisation();
  });

  const checkLocalisation = async () => {
    const hasLocalisationPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasLocalisationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setCoord(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  return (<View>
    <Loader show={isLoading}/>
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
            <View><Text>Date</Text><DatePicker
              options={{
                backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onSelectedChange={date => setDate(date)}
              current="2020-07-13"
              selected="2020-07-23"
              mode="calendar"
              minuteInterval={30}
              style={{ borderRadius: 10 }}
            /></View>
            <View><Text>Coord.</Text><TextInput
              style={styles.input}
              onChangeText={setCoord}
              value={coord}
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
