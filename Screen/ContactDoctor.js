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
          <TouchableOpacity 
          onPress={()=>this.props.navigation.openDrawer('DrawerNavigator')}
          style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Contact-Doctor</Text>
        </View>
        {/* =========Select symtopms====== */}
         <ScrollView style={{marginTop:16}}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Email')}>
            <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:6}}>
           <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Dr.Shahzaib</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Email')}>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Dr-Usama(cancer)</Text>
        </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Email')}>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Dr-Aqib</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Email')}>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Dr-Usama(cancer)</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Email')}>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Dr-Usama(cancer)</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Email')}>
        <View style={{alignItems:'center',flexDirection:'row',borderWidth:1,borderRadius:40,marginHorizontal:50,height:50,marginLeft:33,marginTop:7}}>
        <Text style={{fontSize:17,paddingLeft:60,color:'grey'}}>Dr-Usama(cancer)</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('setting')} style={{backgroundColor:"#3655A7",marginTop:8,borderWidth:1,borderRadius:80,marginHorizontal:80,height:50}}>
            <Text style={{textAlign:'center',fontWeight:'bold',marginTop:10,color:'white',fontSize:18}} >Setting</Text>
        </TouchableOpacity>
        {/* =========Area of linking ====== */}
        </ScrollView>
        
        
      </View>
    );
  }
}
