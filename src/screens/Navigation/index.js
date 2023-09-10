import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../HomeScreen";
import RestaurantDetailsPage from "../RestaurantDetailsScreen";
import DishDetailsScreen from '../DishDetailsScreen';
import BasketScreen from '../BasketScreen';
import OrdersScreen from '../OrdersScreen'
import OrderDetails from '../OrderDetails'
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const RootNavigator =() => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Tabs}/>
        </Stack.Navigator>
    )
}

{/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailsScreen/> */}
    //   <BasketScreen />
      {/* <OrdersScreen /> */}
      {/* <OrderDetails /> */}
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen name='Home' component={HomeStackNavigator} options={{tabBarIcon:({color}) => (
                <AntDesign name="home" size={24} color={color} />
            )}}/>
            <Tab.Screen name='Orders' component={OrdersStackNavigator} options ={{tabBarIcon:({color}) => (
                <AntDesign name="profile" size={24} color={color} />
            )}}/>
            <Tab.Screen name='Profile' component={OrdersScreen} options = {{tabBarIcon:({color }) =>(
                <AntDesign name="user" size={24} color={color} />
    )}}/>
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={HomeScreen}/>
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailsPage}/>
            <HomeStack.Screen name="Dish" component={DishDetailsScreen}/>
            <HomeStack.Screen name="Basket" component={BasketScreen}/>
        </HomeStack.Navigator>
    );
}

const OrdersStack = createNativeStackNavigator();
const OrdersStackNavigator = () =>{
    return(
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={OrdersScreen}/>
            <OrdersStack.Screen name="Order" component={OrderDetails}/>
        </OrdersStack.Navigator>
    );
}

export default RootNavigator