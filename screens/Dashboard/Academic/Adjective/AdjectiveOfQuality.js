import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import {HighLightColor} from "../utils/Colors"
const AdjectiveOfQuality = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      <Text style={{fontSize:16,marginVertical:15,lineHeight:29}}>An adjective used to talk about the quality of a person or thing is known as Adjective of quality. </Text>
      <Text style={{textAlign:'center'}}>Or</Text>
      <Text style={{fontSize:16,marginVertical:15,lineHeight:29,textAlign:"justify"}}>An adjective which describe the 
        <BoldTextHelper
          text= " merits or demerits, shape and size, colour and form, good qualities and bad ones, of a person or a thing are called Descriptive or Qualitative Adjectives"
      inputStyle={{color:HighLightColor}}

        />
      </Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
      inputStyle={{color:HighLightColor}}
        text="Wealthy, regional, industrial, fundamental, elementary, primary, great, beautiful, brave, small, white, etc."
      />
      </Text>
   

      {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
      <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
     
     
      <Text style={{marginVertical:16,fontSize:16}}>
    Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
    </Text> */}
      
    <Text style={{fontSize:16,marginVertical:10}}>1. Telugu is a <BoldTextHelper text = "regional"/> language.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>2. He is a <BoldTextHelper text="wealthy"/> person.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>3. Hyderabad is an <BoldTextHelper text="industrial"/> city.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>4. He is a <BoldTextHelper text="great"/> man.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>5. She is a <BoldTextHelper text="beautiful"/> girl.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>6. He is a <BoldTextHelper text="brave"/> boy.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>7. He is a <BoldTextHelper text="small"/> boy.</Text>
    <Text style={{fontSize:16,marginVertical:10}}>8. It is a <BoldTextHelper text="white"/> cow.</Text>
     
   
      
   

    </View>
  </View>
    </ScrollView>
  )
}

export default AdjectiveOfQuality

const styles = StyleSheet.create({})