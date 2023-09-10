import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const BasketDishItem = ({basketItem})=>{
    return (
        <View style ={styles.row}>
            <View style={{paddingHorizontal:8, paddingVertical:2, borderRadius: 6, backgroundColor:'lightgrey'}}>
                <Text style={{fontWeight:600, fontSize:18}}>1</Text>
            </View>
            <Text style={{fontWeight:600, fontSize:18, paddingHorizontal: 10}}>{basketItem.name}</Text>
            <Text style={{fontWeight:600, fontSize:18, marginLeft:'auto'}}>${basketItem.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 10,
        marginHorizontal:6,
    },
})
export default BasketDishItem