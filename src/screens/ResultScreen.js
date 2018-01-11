import React from 'react'
import { Text, View } from 'react-native'
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

const d3 = {
  scale,
  shape,
}

// data represents the distribution of spendings in a month
data = [
  {"number":  8, "name": 'Fun activities'},
  {"number": 7, "name": 'Dog'},
  {"number": 16, "name": 'Food'},
  {"number": 23, "name": 'Car'},
  {"number": 42, "name": 'Rent'},
  {"number":  4, "name": 'Misc'},
]

class ResultScreen extends React.Component {
  componentDidMount(){
    var arc = d3.shape.arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);
    console.log(`hello world`)
    console.log('arc:', arc())
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
