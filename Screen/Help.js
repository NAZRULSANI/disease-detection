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
          
          <View style={{backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <TouchableOpacity
          onPress={()=>this.props.navigation.openDrawer('DrawerNavigator')}
          style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Help</Text>
        </View>
        {/* =========Area of Diet plan====== */}
          <View style={{marginTop:70,width:"70%",height:'40%',borderWidth:1,padding: 60,marginLeft:55,borderRadius:40}} >
              <Text style={{textAlign:'center',marginTop:40,color:'grey'}}>Short video about App</Text>
          </View>
        
      </View>
    );
  }
}
