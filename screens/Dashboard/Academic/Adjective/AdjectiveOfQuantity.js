import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import {HighLightColor} from "../utils/Colors"
const AdjectiveOfQuantity = () => {
  return (
   <>
    <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      <Text style={{fontSize:16,marginVertical:15,lineHeight:29}}>An adjective used to talk about the quantity of things is known as adjective of quantity.</Text>
     
      <Text style={{fontSize:16,marginVertical:15,lineHeight:29,textAlign:'justify'}}>These adjectives are always applied to Uncountable Nouns in the Singular Number. The nouns which they qualify can never be in the Plural Number.</Text>
      
      <Text style={{fontSize:16,marginVertical:15,lineHeight:29}}>
      <BoldTextHelper
            inputStyle={{color:HighLightColor}}

        text="Little, less, much, enough, no, none, any, whole, some, all, great, half, sufficient, a good deal of, a lot of, plenty of, a kilo, a pound, a ton, a quintal, a liter, a meter, "
      />
      </Text>
      
    <Text style={{fontSize:16,marginVertical:8}}>1. This is <BoldTextHelper text="milk"/> the milk in the cup.	</Text>
    <Text style={{fontSize:16,marginVertical:8}}>2. There is <BoldTextHelper text="enough"/> sugar for the evening tea.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>3. There is <BoldTextHelper text="no"/> bread in the cupboard.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>4. There is one <BoldTextHelper text="lier"/> milk in the jug.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>5. There is a <BoldTextHelper text="little"/> milk in the jug.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>6. My father earned <BoldTextHelper text="enough"/> money.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>7. He showed <BoldTextHelper text="much"/> courage in the war.</Text>
    </View>
  </View>
   </>
  )
}

export default AdjectiveOfQuantity

const styles = StyleSheet.create({})