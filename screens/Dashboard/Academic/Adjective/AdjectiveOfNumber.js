import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdjectiveOfNumber = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to talk about the number of things or persons is known as Adjective of number.</Text>
    
    <Text style={{fontSize:16,marginVertical:15,lineHeight:28,textAlign:"justify"}}>An adjective which describe the merits or demerits, shape and size, colour and form, good qualities and bad ones, of a person or a thing are called Descriptive or Qualitative Adjectives</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: : One, two, three, first, second, few, a few, no, all, some, many, most, several, any, a, an, a lot of, a number of, a heap of, plenty of, etc."
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
    */}
   
    <Text style={{marginVertical:16,fontSize:16,lineHeight:28,textAlign:"justify"}}>
    These Adjectives are always applied to countable things in both Singular and Plural Numbers. Among these, those which refer to definite Numbers (as one / two / three) are called Definite Numeral Adjectives, and those which refer to indefinite number (as many, several, few, etc) are called Indefinite Numeral Adjectives.
  </Text>
    
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. She wrote <BoldTextHelper text="six papers"/> for her B.A.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. Only a <BoldTextHelper text="few people"/> are kind to the Poor.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>3. I got <BoldTextHelper text="first class"/> in my B.A.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. <BoldTextHelper text="All students"/> passed in the exam.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>5. She has <BoldTextHelper text="many"/> books.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>6. They have <BoldTextHelper text="several"/> houses.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>7. There are <BoldTextHelper text="no"/> workers.</Text>
   
 
    
 

  </View>
</View>
  </ScrollView>
  )
}

export default AdjectiveOfNumber

const styles = StyleSheet.create({})