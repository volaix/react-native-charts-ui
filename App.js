import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar } from 'victory-native'
import { Card } from 'react-native-elements'
import RootNavigator from './src/config/router'

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
