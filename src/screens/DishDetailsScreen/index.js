import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const dish = restaurants[0].dishes[0];


const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const getPrice = () =>{
        return (dish.price * quantity).toFixed(2);
    }

    const navigation = useNavigation();

  return (
    <View style = {styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.des}>{dish.description}</Text>
      <View style={styles.separator}/>

      <View style={styles.row}>
        <AntDesign name="minuscircleo" size={36} color="black" onPress={()=>{quantity>0 ? setQuantity(quantity -1) : 0}}/>
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign name="pluscircleo" size={34} color="black" onPress={()=>{setQuantity(quantity+1)}}/>
      </View>

      <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
        <Text style={styles.buttonText}>Add {quantity} items to basket    (${getPrice()})</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        padding:14,
    },
    name:{
        fontSize:40,
        fontWeight:600,
        marginVertical:10,
    },
    des:{
        color:'grey'
    },
    separator:{
        height:1,
        marginVertical:20,
        backgroundColor:'lightgrey'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    quantity:{
        fontSize:20,
        marginHorizontal:12,
    },

    button:{
        backgroundColor:'black',
        padding:18,
        marginTop:'auto',
    },
    buttonText:{
        color:'white',
        fontSize:18,
        textAlign:'center',
    },
})

export default DishDetailsScreen