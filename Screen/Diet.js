import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Covid extends Component {


  state =
    {
      isChecked: 'false',
      setChecked: 'fasle',
      Diet_plan1: '',
      Diet_plan2: '',
      Diet_plan3: '',
      Diet_plan4: '',
      Diet_plan5: '',
      Medicien: '',
      Medicien1: '',
      Medicien2: '',
      Medicien3: '',
    };
  componentDidMount = () => {

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
  }


  render() {
    return (

      <View style={{ flex: 1, }}>

        <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <TouchableOpacity style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Diet-plan</Text>
        </View>
        {/* =========Area of Diet plan====== */}
        <View style={{ width: "70%", height: '40%', borderWidth: 1, alignSelf:'center', justifyContent: 'center', alignItems: 'center', borderRadius: 40, top: 50 }} >
          <Text style={{  color: 'grey', fontWeight: 'bold', fontSize: 17, }}>{this.state.Diet_plan1}{'\n'}
            {this.state.Diet_plan2}{'\n'}{this.state.Diet_plan3}{'\n'}{this.state.Diet_plan4}{'\n'}{this.state.Diet_plan5}
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckRecord', { Diet_plan1: this.state.Diet_plan1, Diet_plan2: this.state.Diet_plan2, Diet_plan3: this.state.Diet_plan3, Diet_plan4: this.state.Diet_plan4, Diet_plan5: this.state.Diet_plan5, Medicien: this.state.Medicien, Medicien1: this.state.Medicien1, Medicien2: this.state.Medicien2, Medicien3: this.state.Medicien3 })}>
          <View style={{ flexDirection: 'row', marginTop: 70, borderWidth: 1, borderColor: '#3655A7', borderRadius: 15, marginHorizontal: 80, height: 50, backgroundColor: '#3655A7' }}>
            <Text style={{ marginTop: 9, fontSize: 18, paddingLeft: 45, color: 'white', fontWeight: 'bold' }}>ADD TO Record</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
