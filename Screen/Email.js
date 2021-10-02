//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Modal,StatusBar, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import RNSmtpMailer from "react-native-smtp-mailer";
import NotificationSounds, { playSampleSound } from  'react-native-notification-sounds';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

// create a component
class Email extends Component {
    componentDidMount = async () =>{
        try{
            if (Platform.OS == 'android') {
              const response = await changeNavigationBarColor('#3655A7');
              console.log(response)// {success: true}
              }
          }catch(e){
              console.log(e)// {success: false}
          }       
      } 

    sendEmail =()=>
    {
      RNSmtpMailer.sendMail({
       mailhost: "smtp.gmail.com",
       port: "587",
       ssl: false, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
       username: "shahzaibmehar803@gmail.com",
       password: "00852111",
       from: "shahzaibmehar803@gmail.com",
       recipients:'shahzaibmehar803@gmail.com',
       subject: "Contact doctor",
       htmlBody: 'kindly Reply to my message its emergency case'
       
       ,
       // attachmentPaths: ["pathToFile1.png","pathToFile2.txt","pathToFile3.csv"],
       // attachmentNames: ["image.jpg", "firstFile.txt", "secondFile.csv"],//only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[] 
       // attachmentTypes: ["img", "txt", "csv"]//needed for android, in ios-only application, leave it empty: attachmentTypes:[]
     })
       .then(success => 
          alert('Mail is successfully Send')
         )
       .catch(err => console.log(err));
   }
   Notify =()=>
   {
    //    alert('Done')
     NotificationSounds.getNotifications('notification').then(soundsList  => {
       console.warn('SOUNDS', JSON.stringify('#3655A7'));
       /*
       Play the notification sound.
       pass the complete sound object.
       This function can be used for playing the sample sound
       */
       playSampleSound(soundsList[4]);
       // if you want to stop any playing sound just call:
       // stopSampleSound();
     });
   }
//    componentDidMount =()=>
//    {
//        setInterval(() => {
//         //    alert('Done')
//         // this.Notify()
//        }, 6000);
    
//    }
   
  

    render() {
        
        


        return (
            <View style={styles.container}>
            <StatusBar backgroundColor={'#3655A7'}/>
                <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                    <TouchableOpacity style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Contact-Doctor</Text>
                </View>

                 <View style={{width:'100%',height:'40%',justifyContent:'center',alignItems:'center',}}>
                     <View style={{width:'40%',height:'20%',backgroundColor:'#3655A7',justifyContent:'center',alignItems:'center',borderRadius:20}} >
                         <TouchableOpacity onPress={()=>this.sendEmail()}>
                             <Text style={{color:'white'}}>Email</Text>
                         </TouchableOpacity>
                     </View>
                     <View style={{width:'40%',height:'20%',backgroundColor:'#3655A7',justifyContent:'center',alignItems:'center',borderRadius:20,marginTop:10}} >
                         <TouchableOpacity 
                              onPress={() => Communications.phonecall('03064344140',true)}
                              
                         >
                             <Text style={{color:'white'}}>Call</Text>
                         </TouchableOpacity>
                     </View>
                     <View style={{width:'40%',height:'20%',backgroundColor:'#3655A7',justifyContent:'center',alignItems:'center',borderRadius:20,marginTop:10}} >
                         <TouchableOpacity 
                              onPress={() =>this.props.navigation.navigate('AddGroupChat')}
                              
                         >
                             <Text style={{color:'white'}}>Chat</Text>
                         </TouchableOpacity>
                     </View>
               </View>
               <View style={{width:'100%',height:'20%',backgroundColor:'#3655A7',marginTop:152,borderTopRightRadius:40,borderTopLeftRadius:40}}>
             
               </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Email;

