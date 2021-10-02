import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AppLoading from '../services/AppLoading';
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
        // this.setState({isLoading:true})

        if (this.state.stsEmail === '' && this.state.stsPassword === '') {
            Alert.alert('Enter details to signin!')
        } else {
            auth()
                .signInWithEmailAndPassword(this.state.stsEmail, this.state.stsPassword)
                .then(() => {
                    this.props.navigation.navigate("Home")
                    // this.setState({ stsIsLoading: false })


                })
                .catch(error => {
                    // this.setState({isLoading:false})

                    if (error.code === 'auth/email-already-in-use') {
                        alert('That email address is already in use!')
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!')
                    }
                    if(this.state.stsPassword.length<6)
                    {
                        alert('That Password Length is less then 6!')
                    }
                    console.error(error);
                });
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#3655A7', height: '100%' }}>
                               {/* {AppLoading.renderLoading(this.state.isLoading)} */}

                <KeyboardAvoidingScrollView>


                    <Text style={{ fontSize: 25, color: '#fff', alignSelf: 'center', marginTop: 40, fontWeight: 'bold' }}>SIGNIN</Text>
                    <Text style={{ fontSize: 17, color: '#fff', alignSelf: 'center', marginTop: 20 }}>Add your details to SIGNIN</Text>

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

                                <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff', fontWeight: 'bold', paddingTop: 5 }}>SignIn</Text>


                            </TouchableOpacity>

                        </View>


                    </View>
                </KeyboardAvoidingScrollView>
            </View>
        )
    }
}