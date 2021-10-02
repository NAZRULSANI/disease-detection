import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import Icon1 from 'react-native-vector-icons/Feather';
import { upload, } from '../services/Api';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export default class Covid extends Component {
  state = {
    isChecked: 'false',
    setChecked: 'fasle',
    name: '',
    Father: '',
    phone: '',
    Email: '',
    password: '',
    cnic: '',
    img: ''
  };

  submit = () => {
    const name = this.state.name;
    const Father = this.state.Father;
    const phone = this.state.phone;
    const Email = this.state.Email;
    const password = this.state.password;
    if(name === "" || Father === "" || phone === "" || Email === ""  )
    {
      alert('Please Enter All the field')
    }
    else
    {
      console.log(
        name,
        Father,
        phone,
        Email,
        password,
      )
      const values = {
        Name: this.state.name,
        Father: this.state.Father,
        Phone: this.state.phone,
        Email: this.state.Email,
        imageUri: this.state.img
      }
      upload(values,
        this.onProfileAdded, { updating: false }
      )
        alert('Data is successfully UPloaded')
       this.props.navigation.navigate('DrawerNavigator')
    }
  }

  render() {
    return (

      <View style={{ flex: 1, }}>
        <View style={{ backgroundColor: '#3655A7', width: '100%', height: '16%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
          {/* <TouchableOpacity style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity> */}
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Bio Data</Text>
        </View>
        {/* =========Area of Diet plan====== */}
        <ScrollView>
          <View style={{
            //   backgroundColor:'#ada',
            marginTop: 10,
            height: '100%',
            width: '100%'
          }}>
            <TouchableOpacity
                onPress={() =>
                  ImagePicker.launchCamera(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200,
                    },
                    (response) => {
                      console.log(response);
                      // this.setState({resourcePath: response});
                      this.setState({ img: response.uri });
                    },
                  )
                }
                style={{
                  height: 5,
                  width: '15%',
                  marginTop: -30,
                  alignItems: 'flex-end'
                }}
              style={{
                height: 120,
                width: '100%',
                // backgroundColor:'#0002',
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <View
                style={{
                  height: 100,
                  width: '30%',
                  backgroundColor: '#0002',
                  borderRadius: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                  
                }}
              >
                <Image
                  style={{
                    height: 120,
                    width: '100%',
                    borderRadius: 200,
                  }}
                  source={{ uri: this.state.img }}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  ImagePicker.launchCamera(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200,
                    },
                    (response) => {
                      console.log(response);
                      // this.setState({resourcePath: response});
                      this.setState({ img: response.uri });
                    },
                  )
                }
                style={{
                  height: 5,
                  width: '15%',
                  marginTop: -30,
                  alignItems: 'flex-end'
                }}>
                <Icon1 name={'edit'} size={16} color={'#000'} />
              </TouchableOpacity>
            </TouchableOpacity>

            <View style={{
              marginHorizontal: '10%', height: 40, borderWidth: 1, justifyContent: 'center', borderRadius: 12,
              marginTop: 20

            }}>
              <TextInput onChangeText={(name) => this.setState({ name: name })} style={{ paddingLeft: 6, }} placeholder="Name" />
            </View>
            <View style={{
              marginHorizontal: '10%', height: 40, borderWidth: 1, justifyContent: 'center', marginTop: 15, borderRadius: 12,

            }}>
              <TextInput onChangeText={(Father) => this.setState({ Father: Father })} style={{ paddingLeft: 6 }} placeholder="Father-Name" />
            </View>
            <View style={{
              marginHorizontal: '10%', height: 40, borderWidth: 1, justifyContent: 'center', marginTop: 15, borderRadius: 12

            }}>
              <TextInput onChangeText={(phone) => this.setState({ phone: phone })} keyboardType={"number-pad"} style={{ paddingLeft: 6 }} placeholder="Phone-no" />
            </View>
            <View style={{
              marginHorizontal: '10%', height: 40, borderWidth: 1, justifyContent: 'center', marginTop: 15, borderRadius: 12


            }}>
              <TextInput onChangeText={(Email) => this.setState({ Email: Email })} style={{ paddingLeft: 6 }} placeholder="E-mail" />
            </View>
            {/* <View style={{
              marginHorizontal: '10%', height: 40, borderWidth: 1, justifyContent: 'center', marginTop: 15, borderRadius: 14

            }}>
              <TextInput onChangeText={(password) => this.setState({ password: password })} style={{ paddingLeft: 6 }} placeholder="password" />
            </View> */}
            <View >
              <TouchableOpacity
                onPress={() => this.submit()}
                // this.props.navigation.navigate('BottomTabNavigation')
                
                // onPress={()=>this.props.navigation.navigate('DrawerNavigator')} 
                style={{ marginHorizontal: '10%', height: 50, borderWidth: 1, justifyContent: 'center', marginHorizontal: '25%', marginTop: 38, borderRadius: 18, backgroundColor: '#3655A7' }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: 'white' }} >Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}