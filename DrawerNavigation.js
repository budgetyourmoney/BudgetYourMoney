import React from "react";
import {
  StyleSheet,
  AppRegistry,
  ListView,
  Text,
  FlatList,
  View,
  Button
} from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  ScrollView,
  Navigation
} from "react-navigation";
import ColorButton from "./components/ColorButton";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "blue"
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
            { key: "red" },
            { key: "green" },
            { key: "yellow" },
            { key: "blue" },
            { key: "gray" },
            { key: "salmon" },
            { key: "pink" },
            { key: "black" }
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

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Home: {
      screen: App
    },
    Setting: {
      screen: SettingsScreen
    }
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);

export default createAppContainer(navigator);
