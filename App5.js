{/* Using ListView */}
import React from "react";
import { StyleSheet, AppRegistry, ListView, Text } from "react-native";

import ColorButton from "./components/ColorButton";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'grey',
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
});

export default class App extends React.Component {
  
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableColors = [
      'red', 
      'green', 
      'yellow',
      'salmon',
      'pink',
      '#000FF',
      'rgba(255, 0, 255, 0.9)',
      'red', 
      'green', 
      'yellow',
      'salmon',
      'pink',
      '#000FF',
      'rgba(255, 0, 255, 0.9)'
    ]
    this.state = {
      backgroundColor: "blue",
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    };
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor, dataSource } = this.state;
    return (
      <ListView style={[styles.container, { backgroundColor }]}
      dataSource={dataSource}
      renderRow={(color) => (
        <ColorButton backgroundColor={color}
          onSelect={color => this.changeColor(color)}/>
      )}
      renderHeader={() => (
        <Text style={styles.header}>Color List</Text>
      )}>
      </ListView>
    );
  }
}

AppRegistry.registerComponent("BYM", () => App);
