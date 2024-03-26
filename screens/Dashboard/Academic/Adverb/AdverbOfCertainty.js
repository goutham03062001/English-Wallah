import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';

const AdverbOfCertainty = () => {
  return (
   <>
    <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverb of Certainty</Text>

        <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show definiteness of the action is known as adverb of certainty.</Text>
        {/* <Text style={{fontSize:16,marginVertical:15}}>**Adverb of time answers the question when?	**</Text> */}
        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
          text="Ex: Certainly, surely, definitely obviously,"
          inputStyle={{color:HighLightColor}}

        />
        </Text>


        <Text style={{fontSize:16,marginVertical:8}}>1. I shall <BoldTextHelper text="certainly"/> help you.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>2. Ramya is <BoldTextHelper text="obviously"/> very clever.</Text>
        
        
      </View>
    </View>
   </>
  )
}

export default AdverbOfCertainty

const styles = StyleSheet.create({})