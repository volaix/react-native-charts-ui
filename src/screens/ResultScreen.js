import React from 'react'
import { Text, View } from 'react-native'

// data represents the distribution of spendings in a month
data = [
  {"number":  8, "name": 'Fun activities'},
  {"number": 7, "name": 'Dog'},
  {"number": 16, "name": 'Food'},
  {"number": 23, "name": 'Car'},
  {"number": 42, "name": 'Rent'},
  {"number":  4, "name": 'Misc'},
];

class ResultScreen extends React.Component {
  componentDidMount(){
    console.log(`hello world`)
  }
  render() {
    return (
      <View>
        <Text>New Charts go here</Text>
      </View>
    )
  }
}

export default ResultScreen
