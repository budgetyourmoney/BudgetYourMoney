{/* When click a button, change color*/}
import React from 'react'
import {
  TouchableHighlight,
  TextInput,
  Image,
  StyleSheet,
  AppRegistry,
  View,
  Text,
  StatusBar
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    margin: 5
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
    this.setState({ backgroundColor })
    this.changeColor = this.changeColor.bind(this)
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableHighlight style={styles.button}
          onPress={() => this.changeColor('yellow')}
          underlayColor='orange'>
          <View style={styles.row}>
            <View style={[
              styles.sample,
              { backgroundColor: 'yellow' }
            ]} />
            <Text style={styles.text}>yellow</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

AppRegistry.registerComponent('BYM', () => App) 
