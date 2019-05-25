// Navigation

import React from "react";
import {
  StyleSheet,
  AppRegistry,
  ListView,
  Text,
  FlatList,
  View
} from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import ColorButton from "./components/ColorButton"

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'blue',
    };
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <FlatList
          data={[
            { key: 'red' },
            { key: 'green' },
            { key: 'yellow' },
            { key: 'blue' },
            { key: 'gray' },
            { key: 'salmon' },
            { key: 'pink' },
            { key: 'black' },
          ]}
          renderItem={({ item }) => (
            <ColorButton
              backgroundColor={item.key}
              onSelect={color => this.changeColor(color)}
            />
          )}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

//AppRegistry.registerComponent("BYM", () => App);

const TabNavigator = createBottomTabNavigator({
  Home: { screen: App },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);
