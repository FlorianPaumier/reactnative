/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListTask from './ListTask';
import ListAchat from './ListAchat';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [achatShow, setAchatShow] = useState(false);
  const [taskShow, setTaskShow] = useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Button
            title={'Liste Achat'}
            style={styles.button}
            onPress={() => {
              setAchatShow(!achatShow);
              setTaskShow(false);
            }}
          />
          <Button
            style={styles.button}
            title={'Liste Task'}
            onPress={() => {
              setAchatShow(false);
              setTaskShow(!taskShow);
            }}
          />
        </View>
        <View>
          <ListTask show={taskShow} hide={setTaskShow} />
          <ListAchat show={achatShow} hide={setAchatShow} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default App;
