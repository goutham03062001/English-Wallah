import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const ReflexivePronoun = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={{fontSize:16,textAlign:"justify",lineHeight:27,marginVertical:10}}>A pronoun used with self or selves to reflect the action of the very on the subject is known as a Reflexive Pronoun.</Text>
      <BoldTextHelper text="EX: Myself, ourselves, yourself, yourselves, himself, herself, itself, themselves." fontSize={17} style={{padding:10,marginTop:10}}/>

      <Text style={{fontSize:17,marginTop:19}}>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text>
      <Text style={{fontSize:17}}>2. We hurt <BoldTextHelper text="ourselves"/>.</Text>
      <Text style={{fontSize:17}}>3. You must know <BoldTextHelper text="yourself"/>.</Text>
      {/* <Text>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text> */}
    </View>
  )
}

export default ReflexivePronoun

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})