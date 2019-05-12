import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class Amount extends Component {

  static navigationOptions = {

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          amt="Enter amount: $"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => 'You entered '&& word).join(' ')}
        </Text>
      </View>
    )
  }
};




