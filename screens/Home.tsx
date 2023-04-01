import React from "react"
import {View, Text, StyleSheet} from "react-native"

import {connect} from "react-redux"

import {onAvailabality, UserState,ShoppingState, ApplicationState} from "../redux"

interface HomeProps{
     userReducer: UserState,
     shoppingReducer: ShoppingState,
     onAvailabality: Function
   }

const _HomeScreen : React.FC<HomeProps> = (props) =>{

  const {location} = props.userReducer
  const {availabality} = props.shoppingReducer
  return(
    <View style={styles.container}>

     <View style={styles.navigation}>

       <View style={{marginTop:50, flex:4, backgroundColor: "white", paddingRight:50, paddingLeft:50, alignItems:"flex-start", justifyContent:"center", flexDirection:"row"}}>

       <Text>{`${location.name},${location.street},${location.city}`}</Text>
       <Text>Edit Button</Text>
     
       </View>

       <View style={{flex:8,backgroundColor:"green"}}>
       <Text>Search Bar</Text>
       </View>
      
     </View>


      <View style={styles.body}>
        <Text>Home Screen</Text>
      </View>

      <View style={styles.footer}>
      <Text>Footer</Text>
      </View>

     </View>

    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"rgb"
  },
  navigation:{
    flex:2,
    backgroundColor:"red"
  },
  body:{
    flex:9,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"yellow"
  },
  footer:{
    flex:1,
    backgroundColor:"cyan"
  }
})

const mapToStateProps = (state: ApplicationState) => ({
  useReducer: state.userReducer,
  shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, {onAvailabality})(_HomeScreen)

export {HomeScreen}