{/* Buttons using Scrollview */}
import React from 'react'
import {
  StyleSheet,
  AppRegistry,
  View,
  ScrollView
} from 'react-native'
import ColorButton from './components/ColorButton';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="red" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="green" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="yellow" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="blue" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="salmon" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="rgb(255, 0, 255)" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="#000000" 
        onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="rgb(255, 255, 255)" 
        onSelect={(color) => this.changeColor(color)}/>
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('BYM', () => App) 
