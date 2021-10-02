//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
class CheckRecord extends Component {
    state =
        {
            data:
                [
                    {
                        id: 1,
                        Diet_plan1: '1- fresh fruits ',
                        Diet_plan2: '2- vegetables',
                        Diet_plan3: '3- beans',
                        Diet_plan4: '4- nuts',
                        Diet_plan5: '5- whole grains',
                        Medicien: 'quarantine 14 days',
                        Medicien1: '2- keep at least 1meter distance',
                        Medicien2: 'stay in separate room from others',
                        Medicien3: '5- optimal supportive care includes oxygen for critical condition',
                    },
                    {
                        id: 2,
                        Diet_plan1: '1- kiwi fruit',
                        Diet_plan2: '2- apples',
                        Diet_plan3: '3- bananas',
                        Diet_plan4: '4- citrus fruits',
                        Diet_plan5: '5- blueberries',
                        Medicien: '1- diphenhydramine',
                        Medicien1: '2- pseudoephedrine',
                        Medicien2: '3- ibuprofen',
                        Medicien3: '4- dextromethorphan',
                    },
                    {
                        id: 3,
                        Diet_plan1: '1- chicken soup',
                        Diet_plan2: '2- fish',
                        Diet_plan3: '3- vegetables',
                        Diet_plan4: '4- fruits ',
                        Diet_plan5: '5- Greek yogurt',
                        Medicien: '1- ceftriaxone',
                        Medicien1: '2- azithromycin',
                        Medicien2: '3- ceftriaxone',
                        Medicien3: '4- dextromethorphan',
                    }
                ]
        }



    componentDidMount = () => {

        Diet_plan1 = this.props.route.params;
        console.log(Diet_plan1, 'Dietplan')
        this.state.data.push(Diet_plan1);
    }
    __handleRemoveItem = (item) => {
        const filteredProducts = this.state.data.filter(p => p.id !== item.id);
        this.setState({ data: filteredProducts })
    }
    renderProduct = ({item,index}) => (
        console.log('item', item),

        <View style={styles.Flatlistcontiner}>
            <View style={{ flexDirection: 'row', }} >

                <View style={{ width: '50%', }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#3655A7' }}>Diet-Plan</Text>
                    <View>
                        <Text style={{ fontSize: 15, color: '#0008' }}>{item.Diet_plan1}</Text>
                        <Text style={{ fontSize: 15, color: '#0008' }}>{item.Diet_plan2}</Text>
                        <Text style={{ fontSize: 15, color: '#0008' }}>{item.Diet_plan3}</Text>
                        <Text style={{ fontSize: 15, color: '#0008' }}>{item.Diet_plan4}</Text>
                        <Text style={{ fontSize: 15, color: '#0008' }}>{item.Diet_plan5}</Text>
                    </View>
                </View>
                <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#3655A7' }}>Medicien</Text>
                    <View>
                        <Text numberOfLines={1} style={{ fontSize: 15, color: '#0008' }}>{item.Medicien}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 15, color: '#0008' }}>{item.Medicien1}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 15, color: '#0008' }}>{item.Medicien2}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 15, color: '#0008' }}>{item.Medicien3}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'flex-end' }}>
                <TouchableOpacity style={{ width: '20%' }} onPress={() => this.__handleRemoveItem(item)}>
                    <AntDesign name="delete" size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BottomTabNavigation')}>
                    <Icon name="add-circle-sharp" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#3655A7', width: '100%', height: '20%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer('DrawerNavigator')}
                        style={{ marginTop: 10, marginLeft: 5 }}><Icon name="md-menu" size={29} color={'white'} /></TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 21 }}>Check-Record</Text>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderProduct}
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Flatlistcontiner:
    {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
});
export default CheckRecord;
