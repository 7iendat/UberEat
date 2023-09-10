import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, Text, View } from "react-native"




const OrdersListItem = ({order}) => {
    const navigation = useNavigation();
    return (
        <>
            <Pressable onPress={() => navigation.navigate('Order')} style={{flexDirection:'row',alignItems:'center', margin: 10}}>
                <Image source={{uri: order.Restaurant.image}} style={{width:70, height:70, marginRight: 20}}/>
                <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{order.Restaurant.name}</Text>
                    <Text style={{color:'grey', fontSize: 14}}>5  items $32 </Text>
                    <Text>2 days ago &#8226; {order.status}</Text>
                </View>
            </Pressable>
            <View style={{height:1, backgroundColor:'lightgrey', marginVertical:4}}/>
        </>
    )
}

export default OrdersListItem