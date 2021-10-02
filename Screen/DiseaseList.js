import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput ,CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome'
// import { color } from 'react-native-reanimated';
import Autocomplete from 'react-native-autocomplete-input';

export default class DiseaseList extends Component {
  constructor(props){
    super(props);
  }
    state =
    {
      IsSelected:false,
      seleted:'',
      isLoading: false,

    }

  render() {
    return (
      <View style={{flex:1}}>
        {/* ==========Header section======= */}
        <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 ,}}>
          <TouchableOpacity 
           onPress={()=>this.props.navigation.openDrawer('DrawerNavigator')}
          style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }} >Disease List</Text>
        </View>
        {/* =========\middle section ======for diease list */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:5
         }}>
          <Icons style={{padding:30,position:'absolute',left:50}} name="search" size={25} color={'grey'} />
          <View style={{width:250}}>
          <TextInput style={{ borderBottomWidth: 2, borderColor: 'grey', textAlign: 'center',height:40, }} placeholder="Search for a disease"></TextInput>
        </View>
        </View>
        <View style={{marginTop:7}}>
          <Text style={{textAlign:'center', color:'grey'}}>or choose from given diaease</Text>
        </View>
       {/* ======selection list of Disease====== */}
       <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}} >
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Covid')} style={{width:"70%",borderWidth:2,height:50, borderColor: '#3655A7',borderRadius: 18,backgroundColor:'#3655A7'}}><Text style={{textAlign:'center',marginTop:5,fontSize:22,color:'white'}}>COVID-19</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('cold')} style={{width:"70%",borderWidth:2,height:50, borderColor: '#3655A7',borderRadius: 18,marginTop:13,backgroundColor:'#3655A7'}} ><Text style={{textAlign:'center',marginTop:5,fontSize:22,color:'white'}} >Cold</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('fever')} style={{width:"70%",borderWidth:2,height:50, borderColor: '#3655A7',borderRadius: 18,marginTop:13,backgroundColor:'#3655A7'}}><Text style={{textAlign:'center',marginTop:5,fontSize:22,color:'white'}} >Fever</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('sore')}style={{width:"70%",borderWidth:2,height:50, borderColor: '#3655A7',borderRadius:18,marginTop:13,backgroundColor:'#3655A7'}}><Text style={{textAlign:'center',marginTop:5,fontSize:22,color:'white'}} >Sore throat</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Influenza')} style={{width:"70%",borderWidth:2,height:50, borderColor: '#3655A7',borderRadius:18,marginTop:13,backgroundColor:'#3655A7'}}><Text style={{textAlign:'center',marginTop:5,fontSize:22,color:'white'}}>Influenza(flu)</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Analysis')} style={{width:"50%",borderWidth:2,height:50, borderColor: '#3655A7',borderRadius:18,marginTop:13,backgroundColor:'#3655A7'}}><Text style={{textAlign:'center',marginTop:5,fontSize:22,color:'white',fontWeight:'bold'}}>Next</Text></TouchableOpacity>
       </View>
      </View>
    );
  }
}
