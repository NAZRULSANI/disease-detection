
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
class Setting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.img}>
                        <Image resizeMode={'contain'} style={[styles.img,{backgroundColor:'#fff',width:'100%'}]} source={require('../assets/1.png')} />
                    </View>
                </View>
                <View style={styles.line} ></View>
                <View style={styles.middle}>
                    <View style={styles.link}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DiseaseList')} style={styles.box} >
                            <Icon name="plus" color={'white'} size={20} />
                            <Text style={{ color: 'white' }} >DiseaseList</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')} style={styles.box} >
                            <Icon name="contacts" color={'white'} size={25} />
                            <Text style={{ color: 'white' }} >Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Help')} style={styles.box} >
                            <Icons name="help" color={'white'} size={20} />
                            <Text style={{ color: 'white' }} >Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={styles.box} >
                            <Icons name="user" color={'white'} size={25} />
                            <Text style={{ color: 'white' }} >About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Email')}
                            style={styles.box} >
                            <Icons name="logout" color={'white'} size={25} />
                            <Text style={{ color: 'white' }} >Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line} ></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3655A7',
    },
    header:
    {
        height: h('33%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:
    {
        width: '50%',
        height: h('20%'),
        backgroundColor: '#aaa3',
        borderRadius: h('10%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    middle:
    {
        height: h('60%'),
        
        width: '100%'
    },

    link:
    {
        width: '100%',
        height: h('40%'),
        marginTop: h('3%'),
        alignItems: 'center',
    },
    box:
    {
        height: h('8%'),
        backgroundColor: '#0003',
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: h('-3%'),
        borderRadius: h('1%'),
        marginTop: h('3%')
    }
});

//make this component available to the app
export default Setting;

