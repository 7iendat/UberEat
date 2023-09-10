import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import styles from './styles';
import Header from './Header';
import {  useRoute, useNavigation } from '@react-navigation/native';




const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const Route= useRoute();
  const Navigation = useNavigation();
  const id = Route.params?.id;
  console.warn(id);
  return (
    <View style={styles.page}>
      <FlatList ListHeaderComponent={()=><Header restaurant={restaurant}/>} data={restaurant.dishes} renderItem={({item}) => <DishListItem dish={item}/> } keyExtractor={(item) => item.name}/>
      
      <AntDesign name="leftcircleo" size={30} color="white" style={styles.iconContainer} onPress={() =>Navigation.goBack()}/>
      
    </View>
  )
}

export default RestaurantDetailsPage

