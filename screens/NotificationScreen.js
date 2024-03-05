import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { PoppinsLight,PoppinsRegular } from '../utils/FontHelper'
const StartingScreen = () => {
  return (
    <View>
       <View style={{width:Dimensions.get("screen").width-30,display:"flex",justifyContent:"flex-start",marginTop:50,paddingHorizontal:20}}>
      <Text style={{fontSize:18,fontFamily:PoppinsLight}}>Notifications</Text>
    </View>
    <View style={styles.rootContainer}>
    
      <Text>No notifications at this moment!</Text>
    </View>
    </View>

  )
}

export default StartingScreen

const styles = StyleSheet.create({
  rootContainer:{
    width:Dimensions.get("screen").width-10,
    height:Dimensions.get("screen").height-100,
    display:"flex",
    flexDirection:"column",
    justifyContent: 'center',
    alignItems:"center"
  }
})