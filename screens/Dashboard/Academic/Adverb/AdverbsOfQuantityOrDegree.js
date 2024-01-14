import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdverbsOfQuantityOrDegree = () => {
  return (
  <>
    <ScrollView>
    <View style={{paddingHorizontal:10}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Quantity or Degree </Text>

      <Text style={{fontSize:16,marginVertical:15,lineHeight:28,textAlign:"justify"}}>An adverb used to show how much or in what degree or to what extent an action is done is known as an adverb of degree.</Text>
      {/* <Text style={{fontSize:16,marginVertical:15}}>Adverb of manner answers the question ‘how’?</Text> */}
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Very, rather, fairly, quite, too, almost, hardly, fully, enough, so, no, pretty, pretty well, any, partly, much, wholly, as …. As, badly, truly, just, "
      />
      </Text>


      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. He speaks English <BoldTextHelper text="fluently"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. It was <BoldTextHelper text="very"/> tragic.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>3. They were <BoldTextHelper text="fully"/> prepared.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. You are <BoldTextHelper text="partly"/> right.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>5. She is <BoldTextHelper text="entirely"/> wrong.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>6. He is <BoldTextHelper text="utterly"/> wrong.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>7. It is <BoldTextHelper text="too"/> hard.	</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>8. These mangoes are <BoldTextHelper text="almost"/> ripe.</Text>
         </View>
  </View>
    </ScrollView>
  </>
  )
}

export default AdverbsOfQuantityOrDegree

const styles = StyleSheet.create({
  rootContainer:7
})