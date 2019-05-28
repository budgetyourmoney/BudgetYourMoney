import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import ActionBar from "react-native-action-bar";
import ColorButton from "./components/ColorButton";
import Icon from "react-native-vector-icons/Entypo";

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

  navigate() {
    this.props.navigation.navigate("DrawerOpen");
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


const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      title: "Home Screen",
      headerLeft: <View>
      <Icon name='menu' size={30} onPress={() => navigation.openDrawer()} />
      </View>
    })
  }
});

const SettingStackNavigator = createStackNavigator({
  Setting: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Setting Screen",
      headerLeft: <View>
      <Icon name='menu' size={30} onPress={() => navigation.openDrawer()} />
      </View>
    })
  }
});

const navigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator
  },
  Setting: {
    screen: SettingStackNavigator
  }
});

export default createAppContainer(navigator);
