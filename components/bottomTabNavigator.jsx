import React, {Component} from "react";
import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home.jsx"
import OfferScreen from "../screens/offer.jsx"

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
     <NavigationContainer>
     <Tab.Navigator
     screenOptions={({route})=>({
       tabBarIcon: ({focused, color, size}) =>{
         let iconName;

         if(route.name==="Home"){
           iconName="home-outline"
         }else if(route.name==="Offer"){
           iconName="flash-outline"
         }

         return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  size={size}
                />
              );
       }

     })}
     tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              height: 80,
              borderTopWidth: 0,
              backgroundColor: "#9DFD24"
            },
            labelStyle: {
              fontSize: 20,
            },
            labelPosition: "beside-icon",
            tabStyle: {
              marginTop: 25,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 450,
              borderWidth: 3,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey"
            }
          }}
     
      >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Offer" component={OfferScreen}/>


     </Tab.Navigator>
     </NavigationContainer>

    )
  }
}

