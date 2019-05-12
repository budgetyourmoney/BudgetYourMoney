import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: '#cc9af4'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#f49ac2'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#fcdfec'}} />
        <View style={{width: 50, height: 50, backgroundColor: '##c2f49a'}} />
        <View style={{width: 50, height: 50, backgroundColor: '##9af4cc'}} />
      </View>
    );
  }
};


