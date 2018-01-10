import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { MAIN_COLOR } from '../sharedColors';

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
<View>
      <Text>List of all contacts</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
</View>
)
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
<View>
      <Text>List of all contacts</Text>
      <Text>You're now chatting with Lucy</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
</View>
)
  }
}

const MainTabNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
})

const RootNavigator = StackNavigator({
  Home: { 
    screen: MainTabNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
  },
  Chat: { screen: ChatScreen },
})

export default RootNavigator