import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { PoppinsRegular } from '../../../../utils/FontHelper';
const StartingScreen = () => {
  return (
    <View style={styles.rootContainer}>
     <Pressable style={{marginTop:20}}>
      <Card style={{height:100,display:"flex",justifyContent:"center",backgroundColor:"#FFDE7D"}}>
        <Card.Title title="English Pedagogy"
          titleStyle={{fontFamily:PoppinsRegular,color:"black",fontSize:18,textAlign:"center"}}

        />
      </Card>
     </Pressable>

     <Pressable style={{marginTop:20}}>
      <Card style={{height:100,display:"flex",justifyContent:"center",backgroundColor:"#00ADB5"}}>
        <Card.Title title="General English" 
          titleStyle={{fontFamily:PoppinsRegular,color:"black",fontSize:18,textAlign:"center"}}
        />
      </Card>
     </Pressable>
    </View>
  )
}

export default StartingScreen

const styles = StyleSheet.create({
  rootContainer:{
    padding:10,
    marginTop:30
  }
})