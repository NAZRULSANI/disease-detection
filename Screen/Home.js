import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Assets } from '@react-navigation/stack';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{
          backgroundColor: '#3655A7',
          width: '100%',
          height: '40%',
          borderWidth: 1,
          //  marginTop:22,
        }}>
          <View style={{ marginTop: 55 }} >
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textAlign: "center",
                fontWeight: 'bold',
              }}
            >Disease Detection{'\n'}&{'\n'}Suggestion System</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Image style={{ width: 220, height: 220, borderRadius: 20, }} source={require('../assets/1.png')} />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Biodata')}>
          <View style={{ borderRadius: 25, backgroundColor: '#3655A7', width: 120, height: 45, borderWidth: 1, marginLeft: 120, marginTop: 30, }}>
            <Text style={{ textAlign: 'center', color: 'white', marginTop: 8, fontWeight: 'bold', fontSize: 18 }} >Started</Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 1, }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Powered by</Text>
        </View>
        <View style={{ marginTop: -5 }}>
          <Text style={{ textAlign: 'center', fontSize: 10 }}>Software Tech</Text>
        </View>
      </View>
    );
  }
}
