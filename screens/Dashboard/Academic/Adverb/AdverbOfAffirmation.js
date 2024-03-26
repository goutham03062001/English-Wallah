import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText"
import { ScrollView } from 'react-native-gesture-handler';
import { HighLightColor } from '../utils/Colors';

const AdverbOfAffirmation = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      {/* <Text style={{fontSize:16,marginVertical:15}}>**Adverb of time answers the question when?	**</Text> */}
      
      <Text style={{fontSize:16,marginVertical:15,lineHeight:29}}>
      <BoldTextHelper
            inputStyle={{color:HighLightColor}}

        text="Ex : Yes, surely, certainly, certainly not, perhaps, definitely, really, obviously, doubtlessly, no, not, never,   "
      />
      </Text>
   

      <Text style={{marginVertical:16,fontSize:16}}>
    Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
    </Text>
      
    <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="Yes"/>, he is my friend.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>2. The soldier should <BoldTextHelper text="certainly"/> get an award for bravery.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>3. He will <BoldTextHelper text="surely"/> give you money.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>4. We are <BoldTextHelper text="definitely"/> leaving tomorrow.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>5. Pooja <BoldTextHelper text="doubtlessly"/> agrees on his side</Text>
    <Text style={{fontSize:16,marginVertical:8}}>6. I would <BoldTextHelper text="obviously"/> feel awesome about your comment.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>7. They are <BoldTextHelper text="really"/> staying tonight for a sleepover.</Text>
     
    <Text style={{marginVertical:16,fontSize:16}}>
    Adverbs of negation are words which declare that a given statement is false, or negative.
    </Text>
      
    <Text style={{fontSize:16,marginVertical:8}}>1. I have <BoldTextHelper text="no"/> money.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>2. You are <BoldTextHelper text="not"/> my enemy.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>3. I have <BoldTextHelper text="never"/> seen him.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>4. I <BoldTextHelper text="almost"/> ran out of words.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>5. Rani <BoldTextHelper text="scarcely"/> does her house duties.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>6. He <BoldTextHelper text="no longer"/> takes interest in his work.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>7. The brothers <BoldTextHelper text="hardly"/> ever meet each other.</Text>
    <Text style={{fontSize:16,marginVertical:8}}>8. Simran <BoldTextHelper text="rarely"/> visits her mom on weekends.</Text>
     

    </View>
  </View>
    </ScrollView>
  )
}

export default AdverbOfAffirmation

const styles = StyleSheet.create({})