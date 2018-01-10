import React from 'react'
import { View, Text, Button } from 'react-native'
import { TabNavigator } from 'react-navigation'
import InfoScreen from '../screens/InfoScreen'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import { MAIN_COLOR, TEXT_DARKGREY } from './sharedColors';

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const RootNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default RootNavigator