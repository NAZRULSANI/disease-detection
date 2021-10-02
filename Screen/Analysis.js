import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLoading from '../services/AppLoading'


export default class Covid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: 'false',
      setChecked: 'fasle',
      condition: '',
      percentage: '',
      Diet_plan1: '',
      Diet_plan2: '',
      Diet_plan3: '',
      Diet_plan4: '',
      Medicien: '',
      Medicien1: '',
      Medicien2: '',
      Medicien3: '',
      isLoading: false,
    };
  }
  componentDidMount = () => {
    this.Diease_check();
    Diet_plan1 = this.props.route.params.Diet_plan1;
    this.setState({ Diet_plan1: Diet_plan1 })
    Diet_plan2 = this.props.route.params.Diet_plan2;
    this.setState({ Diet_plan2: Diet_plan2 });
    Diet_plan3 = this.props.route.params.Diet_plan3;
    this.setState({ Diet_plan3: Diet_plan3 });
    Diet_plan4 = this.props.route.params.Diet_plan4;
    this.setState({ Diet_plan4: Diet_plan4 });
    Diet_plan5 = this.props.route.params.Diet_plan5;
    this.setState({ Diet_plan5: Diet_plan5 });
    Medicien = this.props.route.params.Medicien;
    this.setState({ Medicien: Medicien });
    Medicien1 = this.props.route.params.Medicien1;
    this.setState({ Medicien1: Medicien1 });
    Medicien2 = this.props.route.params.Medicien2;
    this.setState({ Medicien2: Medicien2 });
    Medicien3 = this.props.route.params.Medicien3;
    this.setState({ Medicien3: Medicien3 });

    this.setState({ isLoading: false })

  }

  Diease_check = () => {

    if (this.props.route.params.percent >= 70) {

      alert("please contact with doctor ASAP")
      // this.props.navigation.navigate('Doctor')
    }
    else if (this.props.route.params.percent >= 50) {
      this.setState({ condition: 'positive' })

    }
    else {
      this.setState({ condition: 'negative' })
    }
  }

  render() {
    const props = this.props.route.params
    return (
      <View style={{ flex: 1, marginBottom: 40 }}>
        {
          console.log(props.percent)
        }
        {/* {AppLoading.renderLoading(this.state.isLoading)} */}
        <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer('DrawerNavigator')}
            style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Analysis Symptom</Text>
        </View>
        {/* =========Select symtopms====== */}
        <View style={{
          marginLeft: 40,
          marginTop: 4
        }}>
          <Text style={{ fontSize: 20,fontWeight:'bold',color:'#3655A7'  }}>Disease</Text>
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderRadius: 10,  height: 50, marginHorizontal:40,justifyContent:'center',marginTop:8, }}>
            <Text style={{ fontSize: 17,  color: 'grey' }}>{this.state.condition}</Text>
          </View>
          < View style={{
            marginLeft: 40,
            marginTop: 4
          }}>
            <Text style={{ fontSize: 20,fontWeight:'bold',color:'#3655A7' }}>percentage</Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderRadius: 10,  height: 50, marginHorizontal:40,justifyContent:'center',marginTop:8, }}>

            <Text style={{ fontSize: 15, paddingLeft: 0, color: 'grey' }}>{props.percent}</Text>
          </View>
          {/* =========Area of linking ====== */}
          
       <View style={{ marginTop: 35, }}>
       
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Diet', {
                Diet_plan1: this.state.Diet_plan1, Diet_plan2: this.state.Diet_plan2, Diet_plan3: this.state.Diet_plan3, Diet_plan4: this.state.Diet_plan4, Diet_plan5: this.state.Diet_plan5
                , Medicien: this.state.Medicien, Medicien1: this.state.Medicien1, Medicien2: this.state.Medicien2, Medicien3: this.state.Medicien3
              })}>
              <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#3655A7', borderRadius: 15, marginHorizontal: 80, height: 50, marginTop: 16, backgroundColor: '#3655A7' }}>
                <Text style={{ marginTop: 9, fontSize: 18, paddingLeft: 60, color: 'white' }}>Diet-plan</Text>
              </View>
            </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Medicien', {
                Medicien: this.state.Medicien, Medicien1: this.state.Medicien1, Medicien2: this.state.Medicien2, Medicien3: this.state.Medicien3,
                Diet_plan1: this.state.Diet_plan1, Diet_plan2: this.state.Diet_plan2, Diet_plan3: this.state.Diet_plan3, Diet_plan4: this.state.Diet_plan4, Diet_plan5: this.state.Diet_plan5
              })} >
       
              <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#3655A7', borderRadius: 15, marginHorizontal: 80, height: 50, marginTop: 16, backgroundColor: '#3655A7' }}>
                <Text style={{ marginTop: 9, fontSize: 18, paddingLeft: 26, color: 'white' }}>Suggest Medicien</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Doctor')}>
              <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#3655A7', borderRadius: 15, marginHorizontal: 80, height: 50, marginTop: 16, backgroundColor: '#3655A7' }}>
                <Text style={{ marginTop: 9, fontSize: 18, paddingLeft: 35, color: 'white', }}>Contact Doctor</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckRecord', { Diet_plan1: this.state.Diet_plan1, Diet_plan2: this.state.Diet_plan2, Diet_plan3: this.state.Diet_plan3, Diet_plan4: this.state.Diet_plan4, Diet_plan5: this.state.Diet_plan5, Medicien: this.state.Medicien, Medicien1: this.state.Medicien1, Medicien2: this.state.Medicien2, Medicien3: this.state.Medicien3 })}>
              <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#3655A7', borderRadius: 15, marginHorizontal: 80, height: 50, marginTop: 16, backgroundColor: '#3655A7' }}>
                <Text style={{ marginTop: 9, fontSize: 18, paddingLeft: 45, color: 'white', }}>CheckRecord</Text>
              </View>
            </TouchableOpacity>
          </View>
                 
        </ScrollView>
      </View>
    );
  }
}
