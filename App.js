import React from 'react'
import { TextInput, Image, StyleSheet, AppRegistry, View, Text, StatusBar } from 'react-native'
import picGunhoo from './Assets/gunhoo.jpg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#DDD'
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    color: 'black',
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  },
  pic: {
    borderRadius: 120
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Tanner</Text>
        <Text style={styles.defaultText}>Travis</Text>
        <Image style={styles.pic} source={picGunhoo}/>  
      </View>

    );
  }
}

AppRegistry.registerComponent('BYM', () => App) 