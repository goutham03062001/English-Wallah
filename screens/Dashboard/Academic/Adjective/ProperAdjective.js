import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';

const ProperAdjective = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={{fontSize:17,lineHeight:28}}>The adjectives formed from Proper Nouns are called Proper Adjectives.</Text>
      <BoldTextHelper text="Ex:  What" fontSize={17} 
              inputStyle={{color:HighLightColor,marginVertical:10}}

      />

      <View>
        <Text style={{fontSize:17,marginVertical:8}}>1. <BoldTextHelper text="Indian"/> army </Text>
        <Text style={{fontSize:17,marginVertical:8}}>2. <BoldTextHelper text="French"/> wine </Text>
        <Text style={{fontSize:17,marginVertical:8}}>3. <BoldTextHelper text="American"/> culture </Text>
        <Text style={{fontSize:17,marginVertical:8}}>4. <BoldTextHelper text="English "/>language</Text>
        <Text style={{fontSize:17,marginVertical:8}}>5. <BoldTextHelper text="Shakespearean"/>plays</Text>
        <Text style={{fontSize:17,marginVertical:8}}>6. Dhoni is an <BoldTextHelper text="Indian"/> player.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>7. I love <BoldTextHelper text="Chinese"/>  food. </Text>
        <Text style={{fontSize:17,marginVertical:8}}>8. All the <BoldTextHelper text="African"/>  people are not black.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>9. <BoldTextHelper text="Japanese"/>  cars are wonderful.</Text>
      </View>
    </View>
  )
}

export default ProperAdjective

const styles = StyleSheet.create({
  rootContainer:{
    padding:8
  }
})