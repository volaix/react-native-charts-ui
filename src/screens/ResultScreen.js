import React from 'react'
import { Text, View } from 'react-native'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryScatter } from 'victory-native'

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
        <VictoryChart
          domain={{ x: [0, 4], y: [0, 40000] }}
          domainPadding={{ x: [10, 70], y: 10 }}
          padding={{ top: 10, bottom: 50, left: 60, right: 60 }}
        >
          <VictoryAxis
            tickFormat={["Q1", "Q2", "Q3", "Q4"]}
          />
          <VictoryAxis
            dependentAxis
            style={{ ticks: { padding: 25 } }}
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
        <ScatterAnimation />
      </View>
    )
  }
}

export default ResultScreen

class ScatterAnimation extends React.Component {

  render() {
    return (
      <VictoryChart
      	domain={{ y: [0, 1] }}
      	animate={{ duration: 2000 }}
        padding={{ top: 10, bottom: 100, left: 60, right: 60 }}
      >
        <VictoryScatter
          size={5}
          data={this.state.data}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 })
            },
            onEnter: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}
        />
      </VictoryChart>
    );
  }

  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const num = Math.floor(10 * Math.random() + 5);
    const points = new Array(num).fill(1);
    return points.map((point, index) => {
      return { x: index + 1, y: Math.random() };
    });
  }
}
