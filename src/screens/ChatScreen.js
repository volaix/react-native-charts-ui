import React from 'react'
import { Text, View, Button } from 'react-native'

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

export default ChatScreen