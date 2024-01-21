import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const DemonstrativePronoun = () => {
  return (
    <View style={styles.rootContainer}>
    <Text style={{fontSize:16,textAlign:"justify",lineHeight:27,marginVertical:10}}>
    A pronoun used to point out the person or thing we talk about is known as a Demonstrative Pronoun.    </Text>
    <BoldTextHelper text="Ex: This, that, these, those, such" fontSize={17} style={{padding:10,marginTop:10}}/>

    <Text style={{fontSize:17,marginTop:19}}>1.<BoldTextHelper text="This"/> is my friend’s house.</Text>
    <Text style={{fontSize:17}}>2. <BoldTextHelper text="These"/> are my teacher’s books.</Text>
    <Text style={{fontSize:17}}>3. <BoldTextHelper text="This"/> house is mine.</Text>
    <Text style={{fontSize:17}}>4. <BoldTextHelper text="These"/> things are his.</Text>
    {/* <Text>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text> */}
  </View>
  )
}

export default DemonstrativePronoun

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})