import React from "react"
import {View, Text, StyleSheet} from "react-native"

export const OfferScreen = () =>{
  return(
    <View style={styles.container}>

     <View style={styles.navigation}>


      <View style={styles.body}>
        <Text>Offer Screen</Text>
      </View>

      <View style={styles.footer}>
      <Text>Footer</Text>
      </View>

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