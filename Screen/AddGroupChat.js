import React,{ Component } from 'react';
import { View, Text,ImageBackground,TouchableOpacity,TextInput,StatusBar, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
// import Icon2 from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
// import { primaryColor } from '../../Dimens';

export default class AddGroupChat extends Component {
    state={
        name:''
    }

    handleButtonPress() {
        console.log(this.state.name)
    // if (this.state.name.length > 0) {
      firestore()
        .collection('Groups')
        .add({
          name: this.state.name,
          latestMessage: {
            text: `You have joined the Group ${this.state.name}.`,
            createdAt: new Date().getTime()
          }
        })
        .then(docRef => {
          docRef.collection('MESSAGES').add({
            text: `You have joined the room ${this.state.name}.`,
            createdAt: new Date().getTime(),
            system: true
          });
        //   alert('Done')
          this.props.navigation.navigate('Message');
        });
    // }
  }
  render(){
  return (
    <View
    // source={require('../../assets/bg1.png')}
    style={{flex:1}}>
    <StatusBar backgroundColor='#1d428a'/>
        <View
        style={{
            height:h('10%'),
            width:'100%',
            backgroundColor:'#1d428a',
            flexDirection:'row',
            alignItems:'center',
            // justifyContent:'center'
        }}>
        <TouchableOpacity
        onPress={()=> this.props.navigation.goBack()}
        style={{
            height:h('10%'),
            width:'15%',
            // backgroundColor:'#ada',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <View
        style={{
            height:h('10%'),
            width:'70%',
            // backgroundColor:'#ada',
            alignItems:'center',
            justifyContent:'center'
        }}>
        <Text style={{fontSize:25,color:'#fff'}}>Add Group</Text>
        </View>
        <TouchableOpacity
        // onPress={()=> {this.props.navigation.navigate('AddGroupChat')}}
        style={{
            height:h('10%'),
            width:'15%',
            // backgroundColor:'#ada',
            alignItems:'center',
            justifyContent:'center'
        }}>
        {/* <Icon1 name="pluscircle" size={30} color="#fff" /> */}
        </TouchableOpacity>
        </View>
    <ScrollView>
    <View
    style={{
        height:h('92%'),
        width:'100%',
        // backgroundColor:'#aad',
        alignItems:'center',
        justifyContent:'center'
    }}>
    <View
    style={{
        height:h('6%'),
        width:'80%',
        // backgroundColor:primaryColor,
        borderWidth:h('.1%'),
        borderColor:'#3655A7',
        borderRadius:h('10%')
    }}>
    <TextInput
    style={{
        paddingLeft:h('2%'),
        color:'#3655A7'
    }}
            placeholder={'Enter name'}
            placeholderTextColor={'#3655A7'}
            onChangeText={(name) => this.setState({name})}
        />
    </View>
        <TouchableOpacity
        onPress={() => {this.handleButtonPress()}}
        style={{
            height:h('7%'),
            width:'80%',
            backgroundColor:'#3655A7',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:h('5%'),
            borderRadius:h('10'),
            marginTop:h('2%')
        }}>
            <Text style={{color:'#fff',fontSize:20}}>Submit</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
    
  );
  }
}
