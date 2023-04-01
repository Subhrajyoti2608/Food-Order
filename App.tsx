import {StatusBar} from "expo-status-bar";
import React from "react";
import {View,Text,StyleSheet, Image} from "react-native"

import {createAppContainer, createSwitchNavigator} from "react-navigation"

import {createStackNavigator} from "react-navigation-stack"

import {createBottomTabNavigator} from "react-navigation-tabs"

import {Provider} from "react-redux"
import {store} from "./redux"



import {LandingScreen} from "./screens/Landing"
import {HomeScreen} from "./screens/Home"

const switchNavigator = createSwitchNavigator({

  landingStack:{
    screen: createStackNavigator({
      landing: LandingScreen
    },{
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },

  homeStack: createBottomTabNavigator({
    home:{
      screen: createStackNavigator({
        Home: HomeScreen
      },
      {
      defaultNavigationOptions: {
        headerShown: false
      }
    }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require("./images/home-page.png") : require("./images/icons8-home-24.png")

          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    offer:{
      screen: createStackNavigator({
        Offer: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require("./images/icons8-discount-24.png") : require("./images/icons8-discount-32.png")

          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    cart:{
      screen: createStackNavigator({
        Cart: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require("./images/icons8-shopping-cart-30.png") : require("./images/icons8-shopping-cart-24.png")

          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    account:{
      screen: createStackNavigator({
        Account: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require("./images/icons8-user-30.png") : require("./images/icons8-user-24.png")

          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    }

    
  })
})

const AppNavigation = createAppContainer(switchNavigator)





export default function App(){
    return(
      //<Provider store={store}>
        <AppNavigation/> 
        //</Provider>
    )
}



const styles = StyleSheet.create({
  
  tabIcon:{
width:30,
height:30
  }
})