import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';

const AdverbOfReason = () => {
  return (
    <>
      <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Reason</Text>

        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
          text="Ex: Owing to, due to, consequently, hence, therefore, "
          inputStyle={{color:HighLightColor}}

        />
        </Text>


        <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="Due to"/> bad weather, the match has been postponed.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="Hence"/> I request you to allow me to go home.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>3. It was raining heavily; <BoldTextHelper text="therefore"/>, we stayed in the house.</Text>
        
        
      </View>
    </View>
    </>
  )
}

export default AdverbOfReason

const styles = StyleSheet.create({})