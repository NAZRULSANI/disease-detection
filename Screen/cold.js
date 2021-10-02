import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, CheckBox ,FlatList, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Covid extends Component {

  state = {
    diseases:
      [
        {
          name: 'cough',
          isSelected: false,
        },
        {
          name: 'chills',
          isSelected: false,
        },
        {
          name: 'low-grade fever',
          isSelected: false,
        },
        {
          name: 'chest discomfort',
          isSelected: false,
        },
        {
          name: 'difficulty breathing deeply',
          isSelected: false,
        },
        {
          name: 'stuffy nose',
          isSelected: false,
        },
        {
          name: 'runny nose',
          isSelected: false,
        },
        {
          name: 'sinus pressure',
          isSelected: false,
        },
        {
          name: 'sneezing',
          isSelected: false,
        },
      ],
      Diet_plan1 :'1- kiwi fruit',
      Diet_plan2 :'2- apples',
      Diet_plan3 :'3- bananas',
      Diet_plan4 :'4- citrus fruits',
      Diet_plan5 :'5- blueberries',
      Medicien   :'1- diphenhydramine',
      Medicien1  :'2- pseudoephedrine',
      Medicien2  :'3- ibuprofen',
      Medicien3  :'4- dextromethorphan',

  }
  componentDidMount = () => {
    alert("Please select at least 3 disease if you have less then use Protection")
  }
 
  Disease_check = (item, index) => {
    let temp = this.state.diseases.filter((data) => data.isSelected == true)

    this.props.navigation.navigate("Analysis", { percent: (temp.length / this.state.diseases.length) * 100 ,
      Diet_plan1:this.state.Diet_plan1,Diet_plan2:this.state.Diet_plan2,Diet_plan3:this.state.Diet_plan3,Diet_plan4:this.state.Diet_plan4,Diet_plan5:this.state.Diet_plan5,
      Medicien:this.state.Medicien,Medicien1:this.state.Medicien1,Medicien2:this.state.Medicien2,Medicien3:this.state.Medicien3
    })
   
  }

  toggleDiseases = (item, index) => {
    console.log(index)
    let temp = this.state.diseases
    temp[index].isSelected = !temp[index].isSelected
    this.setState({ diseases: temp })
  }
  renderItem = ({ item, index }) =>

  (

    <Pressable onPress={() => this.toggleDiseases(item, index)} >
      <View style={{ borderWidth: 0.5, marginHorizontal: 25, margin: 5, borderRadius: 10, borderColor: '#3655A7' }}>
        <View style={{ flexDirection: 'row', }}>
          <CheckBox
            style={{ marginTop: 5, marginHorizontal: 5 }}
            value={item.isSelected}
            onValueChange={() => this.toggleDiseases(item, index)}
          />
          <Text style={{ marginTop: 6, fontSize: 15, paddingLeft: 14, color: '#3655A7' }}>{item.name}</Text>
        </View>
      </View>
    </Pressable>

  )


  render() {
    return (
      <View style={{ flex: 1, marginBottom: 40 }}>

        <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.openDrawer('DrawerNavigator')}
          style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }} >COLD</Text>
        </View>
        {/* =========Select symtopms====== */}
        <View style={{
          marginLeft: 40,
          marginTop: 4
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Symptom</Text>
        </View>
        <View style={{ width: '100%', }}>
          <FlatList
            data={this.state.diseases}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}

          />
        </View>
       
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate('Analysis')}
            onPress={() => this.Disease_check()}
            style={{ width: '60%', borderWidth: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 16,alignSelf:'center', marginTop: 10, backgroundColor: '#3655A7' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>GET RESULTS</Text>
          </TouchableOpacity>
           


      </View>
    );
  }
}
