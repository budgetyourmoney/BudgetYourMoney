import React from 'react'
import { TextInput, Image, StyleSheet, AppRegistry, View, Text, StatusBar } from 'react-native'
import picGunhoo from './Assets/gunhoo.jpg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
})

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
    this.changeColor = this.changeColor.bind(this)
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <View style={[
        styles.container,{backgroundColor}]}>
        <Text style={styles.button}
          onPress={() => this.changeColor('green')}>Green</Text>
        <Text style={styles.button}
          onPress={() => this.changeColor('red')}>Red</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('BYM', () => App) 