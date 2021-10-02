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
          
          <View style={{ marginTop: 22, backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <TouchableOpacity
          onPress={()=>this.props.navigation.openDrawer('DrawerNavigator')}
          style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Setting</Text>
        </View>
        {/* =========Select symtopms====== */}
         <ScrollView style={{marginTop:106}}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('help')}>
            <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:6}}>
           <Text style={{fontSize:17,paddingLeft:100,color:'grey'}}>Help</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('About')} >
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:95,color:'grey'}}>About-us</Text>
        </View>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={{marginTop:200,borderWidth:1,borderRadius:80,marginHorizontal:80,height:50,backgroundColor:"#3655A7"}}>
            <Text style={{textAlign:'center',fontWeight:'bold',marginTop:10,color:'white',fontSize:18}} >NEXT</Text>
        </TouchableOpacity>
        {/* =========Area of linking ====== */}
        </ScrollView>
        
        
      </View>
    );
  }
}
