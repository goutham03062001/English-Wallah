import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import { HighLightColor } from '../utils/Colors';

const PossessiveAdjective = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15,textAlign:"justify",lineHeight:25}}>An adjective used to talk about ownership or possession is known as Possessive adjective.</Text>
    <Text style={{fontSize:16,marginVertical:15,lineHeight:29,textAlign:"justify"}}>Possessive adjectives show relationships. They are <BoldTextHelper text="my, our, your, his, her, its, their."       inputStyle={{color:HighLightColor}}
/> In Attributive form they are used before the nouns they qualify. As – <BoldTextHelper text="my book/ books, your book/ books, our house/ houses, its wings."       inputStyle={{color:HighLightColor}}
/>

</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: My, your, our, his, her, its, their"
      inputStyle={{color:HighLightColor}}

    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="My"/> mother is a teacher.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="our"/> country is India.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. <BoldTextHelper text="His"/> wealth was lost.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. <BoldTextHelper text="Her"/> husband died in an accident.</Text>

<Text style={{fontSize:16,marginVertical:8}}>5. All <BoldTextHelper text="their"/> daughters were married last year.</Text>
<Text style={{fontSize:16,marginVertical:8}}>6. <BoldTextHelper text="Your"/> child is not doing well in the school.</Text>
<Text style={{fontSize:16,marginVertical:8}}>7. <BoldTextHelper text="Her"/> thoughts are too complex.</Text>
<Text style={{fontSize:16,marginVertical:8}}>8. Stop messing with <BoldTextHelper text="my"/> hair.</Text>



  </View>
</View>
  </ScrollView>
  )
}

export default PossessiveAdjective

const styles = StyleSheet.create({})