import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';

const InterrogativeAdverbs = () => {
  return (
    <>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Interrogative Adverbs </Text>

      <Text style={{fontSize:16,marginVertical:15}}>An adverb used to ask a question is known as an Interrogative Adverb.</Text>
      <Text style={{fontSize:16,marginVertical:15}}>Adverb of manner answers the question ‘how’?</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
            inputStyle={{color:HighLightColor}}

        text="When, where, why, how, how many, how long, whence, whither, wherefore, "
      />
      </Text>


      <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="When"/> will you go.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="What"/> shall I know?</Text>
      <Text style={{fontSize:16,marginVertical:8}}>3. <BoldTextHelper text="Where"/> do you stay?	</Text>
      <Text style={{fontSize:16,marginVertical:8}}>4. <BoldTextHelper text="Why"/> did you do?</Text>
      <Text style={{fontSize:16,marginVertical:8}}>5. <BoldTextHelper text="How"/> long will it run?</Text>
      
      
    </View>
  </View>
    </>
  )
}

export default InterrogativeAdverbs

const styles = StyleSheet.create({})