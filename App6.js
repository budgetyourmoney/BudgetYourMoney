{/* Using FlatList *}
import React from "react";
import {
  StyleSheet,
  AppRegistry,
  ListView,
  Text,
  FlatList,
  View
} from "react-native";
import ColorButton from "./components/ColorButton";

const styles = StyleSheet.create({
  container: {
    flex: 1
    //color: 'red'
  },
  header: {
    color: "red",
    backgroundColor: "gray",
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: "center"
  },
  text: {
    fontSize: 30,
    margin: 5
  }
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "blue"
      //data: this.props.colors
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

AppRegistry.registerComponent("BYM", () => App);
