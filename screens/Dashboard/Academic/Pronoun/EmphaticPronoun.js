import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const EmphaticPronoun = () => {
  return (
    <View style={styles.rootContainer}>
    <Text style={{fontSize:16,textAlign:"justify",lineHeight:27,marginVertical:10}}>
    A pronoun used for the sake of emphasis is known as Emphatic Pronoun.      </Text>
    <BoldTextHelper 
    inputStyle={{color:"#0165E1"}}
    text="EX: Myself, ourselves, yourself, yourselves, himself, herself, itself, themselves." fontSize={17} style={{padding:10,marginTop:10}}/>

    <Text style={{fontSize:17,marginTop:19}}>1.I my <BoldTextHelper text="myself"/> showed you the way.</Text>
    <Text style={{fontSize:17}}>2. You <BoldTextHelper text="yourself "/>can explain it to me.</Text>
    <Text style={{fontSize:17}}>3. She <BoldTextHelper text="herself "/>. washed her clothes.</Text>
    {/* <Text>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text> */}
  </View>
  )
}

export default EmphaticPronoun

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})