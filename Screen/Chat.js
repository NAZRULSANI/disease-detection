import React, { Component } from 'react'
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage
} from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import { ActivityIndicator, View, StyleSheet,ImageBackground,TouchableOpacity,Text,Image,StatusBar } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import storage from '@react-native-firebase/storage';
// import { primaryColor } from '../../Dimens';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
      }
      componentWillMount() {
        const thread = this.props.route.params.item;
        console.log('ID',thread)
        firestore()
      .collection('Groups')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email
            };
          }

          return data;
        });
        this.setState({
          messages: messages
        });
        // setMessages(messages);
      });
        // this.setState({
        //   messages: [
        //     {
        //       _id: 1,
        //       text: 'Hello developer',
        //       createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        //       user: {
        //         _id: 2,
        //         name: 'React Native',
        //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
        //       },
        //     },
        //   ],
        // });
      }

      handleSend = async (messages = []) => {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
        // alert(messages)
        console.log('MESSAGES',messages)
        const thread = this.props.route.params.item;
        console.log('ID',thread._id)
        const user = auth().currentUser;
        const currentUser = user.toJSON();
        const text = messages[0].text;

        // this.setState((previousState) => {
        //   return {
        //     messages: GiftedChat.append(previousState.messages, messages),
        //   }
        // })
    
        firestore()
          .collection('Groups')
          .doc(thread._id)
          .collection('MESSAGES')
          .add({
            text,
            createdAt: new Date().getTime(),
            user: {
              _id: currentUser.uid,
              email: currentUser.email
            }
          });
    
        await firestore()
          .collection('Groups')
          .doc(thread._id)
          .set(
            {
              latestMessage: {
                text,
                createdAt: new Date().getTime()
              }
            },
            { merge: true }
          );
      }

      onSend(messages = []) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
        this.handleSend()
      }
      renderBubble = (props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#3655A7'
              }
            }}
            textStyle={{
              right: {
                color: '#fff'
              }
            }}
          />
        );
      }
    
      renderLoading = () => {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color={'#3655A7'} />
          </View>
        );
      }
    
      renderSend = (props) => {
        return (
          <Send {...props}>
            <View style={styles.sendingContainer}>
              <IconButton icon='send-circle' size={32} color={'#3655A7'} />
            </View>
          </Send>
        );
      }
    
      scrollToBottomComponent = () => {
        return (
          <View style={styles.bottomComponentContainer}>
            <IconButton icon='chevron-double-down' size={36} color='#b48ca6' />
          </View>
        );
      }
    
       renderSystemMessage = (props) => {
        return (
          <SystemMessage
            {...props}
            wrapperStyle={styles.systemMessageWrapper}
            textStyle={styles.systemMessageText}
          />
        );
      }
    
      render() {
        const user = auth().currentUser;
        const currentUser = user.toJSON();
        console.log('Email',currentUser.email)
        return (
          <View
          // source={require('../../assets/bg1.png')}
                style={{
            flex:1
          }}
          >
          <StatusBar backgroundColor='#3655A7'/>
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
        <Text style={{fontSize:25,color:'#fff'}}>{this.props.route.params.item.name}</Text>
        </View>
        </View>
          <GiftedChat
          messages={this.state.messages}
          onSend={this.handleSend}
          user={{ _id:currentUser.uid }}
          placeholder='Type your message here...'
          alwaysShowSend
          showUserAvatar
          scrollToBottom
          renderBubble={this.renderBubble}
          renderLoading={this.renderLoading}
          renderSend={this.renderSend}
          scrollToBottomComponent={this.scrollToBottomComponent}
          renderSystemMessage={this.renderSystemMessage}
        />
        </View>
        );
      }
    }
  
const styles = StyleSheet.create({
      loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomComponentContainer: {
        // backgroundColor: '#6646ee',
        justifyContent: 'center',
        alignItems: 'center',
      },
      systemMessageWrapper: {
        backgroundColor: '#3655A7',
        borderRadius: 4,
        padding: 5
      },
      systemMessageText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
      }
    });
    