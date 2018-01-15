import React from 'react'
import { ART, Text, View, TouchableWithoutFeedback } from 'react-native'
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import styled from "styled-components/native"

const d3 = {
  scale,
  shape,
}

const {
  Surface,
  Group,
  Shape,
} = ART;

const StyledView = styled.View`
  background-color: 'rgb(4,45,60)';
`

class ResultScreen extends React.Component {
  componentDidMount() {
    var arc = d3.shape.arc()
      .innerRadius(0)
      .outerRadius(100)
      .startAngle(0)
      .endAngle(Math.PI / 2);
    console.log(`hello world`)
    console.log('arc:', arc())
  }

  onPressBox = () => {
    console.log('helloworld')
  }

  render() {
    return (
      <StyledView >

        <Text>New Charts go here</Text>

          <Surface
            width={200}
            height={200}
            style={{ backgroundColor: 'lightgrey' }}
          >
            <Group>
              <Shape
                d="M10,10 H120 v40 h-30 Z"
                stroke="#000"
                strokeWidth={2}
              />
            </Group>
          </Surface>

        <Text>Text under surface</Text>

      </StyledView>
    )
  }
}

export default ResultScreen
