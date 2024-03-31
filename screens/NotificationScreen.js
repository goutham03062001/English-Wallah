import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { PoppinsRegular } from '../utils/FontHelper';
const NotificationScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={{fontFamily:PoppinsRegular,fontSize:16}}>Notifications</Text>

      <View style={styles.center}>
        <Text>No Notifications at this moment!</Text>
      </View>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  rootContainer:{
    marginTop:50,
    paddingLeft:10,
  },
  center:{
    height:Dimensions.get("screen").height-150,
    display:"flex",
    justifyContent:"center",
    alignItems:'center'
  }
})