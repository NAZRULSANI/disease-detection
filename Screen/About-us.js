import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Covid extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isChecked:'false',
       setChecked:'fasle',
    };
  }

  render() {
    return (
      <View style={{flex:1,marginBottom:40}}>
          
          <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <TouchableOpacity style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>About-us</Text>
        </View>
        <View>
          <Text style={{textAlign:'center'}}>Development-Team</Text>
        </View>
        <View style={{marginTop:46}}>
            <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:6}}>
           <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Shahzaib</Text>
        </View>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Usama</Text>
        </View>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{textAlign:'center',fontSize:17,paddingLeft:60,color:'grey'}}>Aqib</Text>
        </View>
        <View style={{borderRadius:25,backgroundColor:'#3655A7',width:120,height:45,borderWidth:1,marginLeft:120,marginTop:140,}}>
            <Text style={{textAlign:'center',color:'white', padding: 10,fontWeight:'bold',fontSize:18}} >Started</Text>
        </View>
        
        <View style={{marginTop:-5}}>
            <Text style={{ fontWeight:'bold',fontSize:16,textAlign:'center' }}>Powered by</Text>
        </View>
        <View style={{marginTop:-5}}>
         <Text style={{textAlign:'center',fontSize:10}}>Software Tech</Text>
         </View>
        
        </View>
        
      </View>
    );
  }
}
