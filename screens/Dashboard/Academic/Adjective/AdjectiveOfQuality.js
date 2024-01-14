import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdjectiveOfQuality = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      <Text style={{fontSize:16,marginVertical:15}}>An adjective used to talk about the quality of a person or thing is known as Adjective of quality. </Text>
      <Text style={{textAlign:'center'}}>Or</Text>
      <Text style={{fontSize:16,marginVertical:15}}>An adjective which describe the merits or demerits, shape and size, colour and form, good qualities and bad ones, of a person or a thing are called Descriptive or Qualitative Adjectives</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Wealthy, regional, industrial, fundamental, elementary, primary, great, beautiful, brave, small, white, etc."
      />
      </Text>
   

      {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
      <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
     
     
      <Text style={{marginVertical:16,fontSize:16}}>
    Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
    </Text> */}
      
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>1. Telugu is a <BoldTextHelper text = "regional"/> language.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>2. He is a <BoldTextHelper text="wealthy"/> person.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>3. Hyderabad is an <BoldTextHelper text="industrial"/> city.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>4. He is a <BoldTextHelper text="great"/> man.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>5. She is a <BoldTextHelper text="beautiful"/> girl.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>6. He is a <BoldTextHelper text="brave"/> boy.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>7. He is a <BoldTextHelper text="small"/> boy.</Text>
    <Text style={{fontSize:16,marginVertical:10,color:"green"}}>8. It is a <BoldTextHelper text="white"/> cow.</Text>
     
   
      
   

    </View>
  </View>
    </ScrollView>
  )
}

export default AdjectiveOfQuality

const styles = StyleSheet.create({})