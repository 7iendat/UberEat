import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles';
import DishListItem from '../../components/DishListItem';
import BasketDishItem from '../../components/BasketDishItem';

const order = orders[0];
const restaurant = restaurants[0];


const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{uri: order.Restaurant.image}} style={styles.image}/>
        <View style={styles.container}>
            <Text style={styles.title}>{order.Restaurant.name}</Text>
            <Text style={styles.subtitle}> {order.status} &#8226; 2 days ago</Text>
            <Text style={styles.menuTitle}>Your order</Text>
        </View>
        </View>
    </View>
  )
}

const OrderDetails = () => {
    return (
        
        <FlatList ListHeaderComponent={OrderDetailsHeader} data={restaurant.dishes} renderItem={({item}) => <BasketDishItem  basketItem={item}/>}/>
    )
}

export default OrderDetails