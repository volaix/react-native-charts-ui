import React from 'react'
import { Text, View } from 'react-native'

import styled from "styled-components/native"

const BackgroundView = styled.View`
  background-color: 'rgba(80, 32, 31, 1)';
  height: 100%;
`

const LargeText = styled.Text`
  color: 'rgb(255,255,255)';
  font-size: 24;
`

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <BackgroundView>
        <View style={{ backgroundColor: 'red', height: 5, width: 5 }}></View>
        <LargeText>If I had ________</LargeText>
      </BackgroundView>
    )
  }
}

export default RecentChatsScreen
