import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import { HighLightColor } from '../utils/Colors';

const ExclamatoryAdjective = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={{fontSize:16,lineHeight:29}}>The word” what “is known as an Exclamatory Adjective.</Text>
      <BoldTextHelper text="Ex:  What" fontSize={17} 
              inputStyle={{color:HighLightColor,marginVertical:18}}

      />

      <View>
        <Text style={{fontSize:17,marginVertical:8}}>1. <BoldTextHelper text="What"/> a beauty! </Text>
        <Text style={{fontSize:17,marginVertical:8}}>2. <BoldTextHelper text="What"/> an insult! </Text>
        <Text style={{fontSize:17,marginVertical:8}}>3. <BoldTextHelper text="What"/> a tragedy! </Text>
        <Text style={{fontSize:17,marginVertical:8}}>4. <BoldTextHelper text="What"/> nonsense this is! </Text>
      </View>
    </View>
  )
}

export default ExclamatoryAdjective

const styles = StyleSheet.create({
  rootContainer:{
    padding:8
  }
})