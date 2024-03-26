import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';
const InterrogativeAdjective = () => {
  return (
    <>
        <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to question is known as Interrogative adjective. </Text>
    
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex:What, which, whose"
      inputStyle={{color:HighLightColor}}

    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="What"/> advice shall I give you?</Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="What"/> language do you teach at college?</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. <BoldTextHelper text="Which"/> book do you want?</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. <BoldTextHelper text="Which"/> places do you wish to visit?.</Text>

<Text style={{fontSize:16,marginVertical:8}}>5. <BoldTextHelper text="Whose"/> photograph is this?</Text>
<Text style={{fontSize:16,marginVertical:8}}>6. <BoldTextHelper text="Whose"/> hand writing is this?</Text>
<Text style={{fontSize:16,marginVertical:8}}>7. <BoldTextHelper text="Whose"/> book is that?</Text>
<Text style={{fontSize:16,marginVertical:8}}>8. On <BoldTextHelper text="Whose"/> recommendation did you apply for this post?</Text>


  </View>
</View>
  </ScrollView>
    </>
  )
}

export default InterrogativeAdjective

const styles = StyleSheet.create({})