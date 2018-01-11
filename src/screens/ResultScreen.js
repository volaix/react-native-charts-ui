import React from 'react'
import { Text, View } from 'react-native'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 40000 }
]

class ResultScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>You would've made this much!!!</Text>
        <VictoryChart
        domain={{x: [0, 4], y: [0, 40000]}}
          domainPadding={80} 
        >
          <VictoryAxis 
          tickFormat={["Q1", "Q2", "Q3", "Q4"]}
          />
          <VictoryAxis 
          dependentAxis
          //tickFormat expects an array
          tickFormat={(x) => (`$${x / 1000}k`)}
          // offsetX={0}
          />
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
      </View>
    )
  }
}

export default ResultScreen