import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import RecentChatsScreen from '../screens/RecentChatsScreen'
import AllContactsScreen from '../screens/AllContactsScreen'
import ResultScreen from '../screens/ResultScreen'
import ChatScreen from '../screens/ChatScreen'

const MainTabNavigator = TabNavigator({
  Asset: { screen: RecentChatsScreen },
  When: { screen: AllContactsScreen },
  Result: { screen: ResultScreen },
})

const RootNavigator = StackNavigator({
  Home: { 
    screen: MainTabNavigator,
    navigationOptions: {
      title: 'Predictor',
    },
  },
  Chat: { screen: ChatScreen },
})

export default RootNavigator