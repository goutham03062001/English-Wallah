import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const PossessiveAdjective = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15,textAlign:"justify",lineHeight:25}}>An adjective used to talk about ownership or possession is known as Possessive adjective.</Text>
    <Text style={{fontSize:16,marginVertical:15,lineHeight:29,textAlign:"justify"}}>Possessive adjectives show relationships. They are my, our, your, his, her, its, their. In Attributive form they are used before the nouns they qualify. As – my book/ books, your book/ books, our house/ houses, its wings.

</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: My, your, our, his, her, its, their"
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. <BoldTextHelper text="My"/> mother is a teacher.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. <BoldTextHelper text="our"/> country is India.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>3. <BoldTextHelper text="His"/> wealth was lost.</Text>
  <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. <BoldTextHelper text="Her"/> husband died in an accident.</Text>

<Text style={{fontSize:16,marginVertical:8,color:"green"}}>5. All <BoldTextHelper text="their"/> daughters were married last year.</Text>
<Text style={{fontSize:16,marginVertical:8,color:"green"}}>6. <BoldTextHelper text="Your"/> child is not doing well in the school.</Text>
<Text style={{fontSize:16,marginVertical:8,color:"green"}}>7. <BoldTextHelper text="Her"/> thoughts are too complex.</Text>
<Text style={{fontSize:16,marginVertical:8,color:"green"}}>8. Stop messing with <BoldTextHelper text="my"/> hair.</Text>



  </View>
</View>
  </ScrollView>
  )
}

export default PossessiveAdjective

const styles = StyleSheet.create({})