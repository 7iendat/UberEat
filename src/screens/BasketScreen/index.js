import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from '../../components/BasketDishItem';


const restaurant = restaurants[0];


const BasketScreen = () => {

  return (
    <View style={styles.page}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={{fontSize:20, fontWeight: 500, marginBottom: 8}}>Your items</Text>

        <FlatList data={restaurant.dishes} renderItem={({item}) => <BasketDishItem basketItem = {item}/>}/>

        <View style={styles.separator}/>

        <View style={styles.button}>
            <Text style={styles.buttonText}>Create Order</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    page:{
        flex: 1,
        width: '100%',
        paddingVertical: 30,
        padding:14,
    },
    name:{
        fontSize:30,
        fontWeight:600,
        marginVertical:10,
    },
    separator:{
        height:1,
        marginVertical:20,
        backgroundColor:'lightgrey'
    },
    button:{
        backgroundColor:'black',
        paddingVertical:10,
    },
    buttonText:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    },
})

export default BasketScreen