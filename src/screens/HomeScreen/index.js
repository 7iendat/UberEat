import {  FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json';
import RestaurantItem from '../../../src/components/Restaurantitem';


const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList data={restaurants} renderItem={({item}) => <RestaurantItem restaurant = {item} />} showsVerticalScrollIndicator={false}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  page:{
    padding: 10,
    paddingVertical: 30,
  }
});