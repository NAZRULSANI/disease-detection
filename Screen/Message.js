import React, {Component} from 'react';
import {View,Text,StatusBar,SafeAreaView, Image, TouchableOpacity,FlatList,ImageBackground} from 'react-native';
// import { NavHeader } from '../../components';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import {signout,userTask} from '../services/Api';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
// import { primaryColor } from '../../Dimens';

export default class Message extends Component {
    state = {
        productList:[],
        id:'',
        selectedIndex: 0,
        refreshing: false,    
        userid:'',
    }
    signout = () => {
        signout()
    }

    onProfileReceived = (productList) => {
        console.log(productList);
        if(productList.length === 0){
            this.manageLoading(false);
            this.setState({msg:'Add Profile',press:()=> this.props.navigation.navigate('HelperProfile')})
        } else {
        this.setState(prevState => ({
            productList: prevState.productList = productList
        }));
        // this.manageLoading(false);      
       }
    }  

    componentDidMount = () => {
        // const UserId = auth().currentUser.uid;
        // console.log('User',UserId) 
        // this.setState({userid:UserId})  
        // console.log('UserID',this.state.userid) 
        // this.userProducts(this.onProfileReceived);
        // if (UserId !== null){
        // setInterval(() => {
        //     // alert('Done')
        //     // this.refresh()
            this.userProducts(this.onProfileReceived);
        // }, 10000);
    // }
    }

    userProducts = async (productsRetrieved) => {
        // if (this.state.userid !== null){
        console.log('Message request Send')
     var productList = [];
   
     var snapshot = await firebase.firestore()
       .collection('Groups')
    //    .where('UserId', '==' , this.state.userid)
       .orderBy('latestMessage.createdAt', 'desc')
       .onSnapshot(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',

            latestMessage: {
              text: ''
            },
            ...documentSnapshot.data()
          };
        });
        this.setState({productList:threads})
        console.log(this.state.productList)
    })
// }
   }

   renderItemDesign = (item,index) => (
       <TouchableOpacity
       onPress={()=> this.props.navigation.navigate('Chat',{item:item})}
       style={{
           height:h('10%'),
           width:'100%',
        //    backgroundColor:'#fff',
        //    borderRadius:h('1%'),
           flexDirection:'row',
           marginTop:h('1%'),
           borderWidth:h('.1%'),
           borderColor:'#3655A7'
       }}
       >
           {/* <View
           style={{
               height:h('12%'),
               width:'30%',
            //    backgroundColor:'#faf',
               alignItems:'center',
               justifyContent:'center'
           }}
           >
            <Image
              source={item.HelperImage && {uri: item.HelperImage}}
            style={{
                height:h('12%'),
                width:'80%',
                borderRadius:h('10%')
            }}
            />
           </View> */}
           <View
           style={{
               height:h('10%'),
               width:'100%',
            //    backgroundColor:'#faf',
            //    alignItems:'center',
               justifyContent:'center',
            //    flexDirection:'row',
            marginLeft:h('2%')
           }}
           >
               <Text style={{fontSize:h('3%'),color:'#3655A7'}}>{item.HelperFname} {item.name} </Text>
               <Text style={{fontSize:h('2%'),marginLeft:h('1%'),color:'#3655A7'}}>{item.latestMessage.text}</Text>
           </View>
           {/* <View
           style={{
               height:h('10%'),
               width:'25%',
            //    backgroundColor:'#ada',
               alignItems:'center',
               justifyContent:'center'
           }}
           > */}
            {/* <TouchableOpacity
            onPress={()=> {
                firestore()
                .collection('Messages')
                .add({
                  name: item.UserFname,
                  latestMessage: {
                    text: `You have joined the Group ${item.UserFname}.`,
                    createdAt: new Date().getTime()
                  }
                })
                .then(docRef => {
                  docRef.collection('MESSAGES').add({
                    text: `You have joined the room ${item.UserFname}.`,
                    createdAt: new Date().getTime(),
                    system: true
                  });
                  this.props.navigation.navigate('Message1');
                });        
            }}
           style={{
               height:h('7%'),
               width:'80%',
               backgroundColor:'#1d428a',
               borderRadius:h('1%'),
               alignItems:'center',
               justifyContent:'center'
           }}
           >
               <Text style={{color:'#fff'}}>Message</Text>
           </TouchableOpacity> */}
           {/* </View> */}
       </TouchableOpacity>
);

   refresh = () => {
    this.setState({refreshing: true});
    // userProducts(this.onProfileReceived);
    setTimeout(() => {
    this.setState({refreshing: false}, () => {
        // console.warn('All done');
    });
    }, 3000);
};

    render (){
        return (
            <View
            // source={require('../../assets/bg1.png')}
            style={{flex:1}}>
          <StatusBar backgroundColor='#3655A7'/>
                <SafeAreaView/>
                <View
                style={{
                    height:h('10%'),
                    width:'100%',
                    backgroundColor:'#3655A7',
                    flexDirection:'row',
                    alignItems:'center',
                    // justifyContent:'center'
                }}>
                <TouchableOpacity
                onPress={()=> {this.props.navigation.goBack()}}
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
                <Text style={{fontSize:25,color:'#fff'}}>Community</Text>
                </View>
                <TouchableOpacity
                onPress={()=> {this.props.navigation.navigate('AddGroupChat')}}
                style={{
                    height:h('10%'),
                    width:'15%',
                    // backgroundColor:'#ada',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <Icon1 name="pluscircle" size={30} color="#fff" />
                </TouchableOpacity>
                </View>
                <View
                        style={{
                            flex:1,
                            // margin:h('1%'),
                            // marginTop:-h('1%'),
                            // backgroundColor:'#ada',
                            // marginBottom:-h('1%')
                        }}
                        >
                            <FlatList
                                data={this.state.productList}
                                renderItem={({item,index}) => this.renderItemDesign(item,index)}
                                keyExtractor={(item, index) => index.toString()}                        
                                showsVerticalScrollIndicator={false}
                                refreshing={this.state.refreshing}
                                onRefresh={() => this.refresh()}
                            />
                        </View>
            </View>
        )
    }
}