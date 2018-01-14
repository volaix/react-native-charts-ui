import React from 'react'
import { ART, Text, View } from 'react-native'
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

const d3 = {
  scale,
  shape,
}

const {
  Surface,
  Group,
  Shape,
} = ART;

class ResultScreen extends React.Component {
  componentDidMount() {
    var arc = d3.shape.arc()
      .innerRadius(0)
      .outerRadius(100)
      .startAngle(0)
      .endAngle(Math.PI / 2);

    console.log('arc:', arc())

  }
  render() {
    return (
      <View>

        <Text>New Charts go here</Text>

        <Surface 
        width={1000} 
        height={600} 
        style={{ backgroundColor:'lightgrey' }}
       >
          <Group>
          <Shape
            d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            stroke="#000"
            strokeWidth={1}
            />
          </Group>
        </Surface>

        <Text>Text under surface</Text>

      </View>
    )
  }
}

export default ResultScreen
