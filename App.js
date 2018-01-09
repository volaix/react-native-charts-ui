import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar } from 'victory-native'
import { Card } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card >
          <Text>VictoryBar</Text>
          <VictoryBar />
        </Card>
        <Card style={{width:20}}>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
