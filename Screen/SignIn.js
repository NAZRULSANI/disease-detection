import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AppLoading from '../services/AppLoading'
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stsEmail: '',
            stsPassword: '',
            isLoading: false,
        }
    }


    handleEmail = (text) => {
        this.setState({ stsEmail: text })
    }
    handlePassword = (text) => {
        this.setState({ stsPassword: text })
    }

   

    login = () => {
        if(this.state.stsPassword === "" || this.state.stsEmail === "" )
        {
            alert("please fill the form")
        }
        // this.setState({isLoading:true})
        auth()
            .createUserWithEmailAndPassword(this.state.stsEmail, this.state.stsPassword)
            .then((res) => {
                console.log("====>",res);
                // this.setState({ stsIsLoading: false })
                this.props.navigation.navigate("Home")
                
            })
            .catch(error => {
                // this.setState({isLoading:false})

                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!')
                }
                console.error(error);
            });

    }








    render() {
        return (
            <View style={{ backgroundColor: '#3655A7', height: '100%' }}>
               {/* {AppLoading.renderLoading(this.state.isLoading)} */}
                <KeyboardAvoidingScrollView>
                  <Text style={{ fontSize: 25, color: '#fff', alignSelf: 'center', marginTop: 40, fontWeight: 'bold' }}>SIGNUP</Text>
                    <Text style={{ fontSize: 17, color: '#fff', alignSelf: 'center', marginTop: 20 }}>Add your details to SIGNUP</Text>

                    <View style={{
                        backgroundColor: '#fff', marginTop: '10%', marginLeft: "5%", marginRight: '5%', borderRadius: 25,
                        flex: 0.6,
                        borderRadius: 20,
                    }}>

                        <View style={{ alignItems: 'center', paddingVertical: 40 }}>


                            <View style={{ flexDirection: 'row', paddingBottom: 10, fontSize: 20, backgroundColor: '#ECEFF4', marginTop: 20, borderRadius: 15, padding: 10, }}>

                                <TextInput autoCapitalize='none'
                                    style={{ height: 30, width: 280, paddingHorizontal: 5, padding: 2 }}
                                    placeholder='Your Email...' placeholderTextColor='#000'
                                    onChangeText={(text) => this.handleEmail(text)}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', paddingBottom: 10, fontSize: 20, backgroundColor: '#ECEFF4', marginTop: 20, borderRadius: 15, padding: 10, }}>

                                <TextInput
                                    style={{ height: 30, width: 280, paddingHorizontal: 5, padding: 2 }}
                                    placeholder='Password...' placeholderTextColor='#000'
                                    secureTextEntry={true}
                                    onChangeText={(text) => this.handlePassword(text)}

                                />

                            </View>
                                    
                                <TouchableOpacity style={{ backgroundColor: '#3655A7', borderRadius: 10, width: '65%', paddingTop: 10, height: "22%", fontSize: 20, marginTop: 35, alignItems: 'center', padding: 20, justifyContent: 'center' }}
                                    onPress={() => this.login()}
                                >
                                   
                                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff', fontWeight: 'bold',  paddingTop: 5 }}>SignUp</Text>
                                   
                                    </TouchableOpacity>


                                   

                            <View>
                                <TouchableOpacity style={{ top: 10 }} onPress={() => this.props.navigation.navigate('signIn2')} >
                                    <Text>Already have a account</Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                    </View>
                </KeyboardAvoidingScrollView>
            </View>
        )
    }
}