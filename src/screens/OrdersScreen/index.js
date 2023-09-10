import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import OrdersListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'

const OrdersScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList data={orders} renderItem={ ({item}) => <OrdersListItem  order={item} />} />
    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:'100%',
        paddingTop:50
    },
})

export default OrdersScreen