import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const RelativeAdverbs = () => {
  return (
    <>
      <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Relative adverbs </Text>

      <Text style={{fontSize:16,marginVertical:15,lineHeight:28}}>Relative adverbs are words that provide more information about the people, places or things being discussed. Beyond that, relative adverbs join clauses and sentences 
together. They are used at the beginning of adjective clauses, which are also referred to as relative clauses. 
</Text>
      {/* <Text style={{fontSize:16,marginVertical:15}}>Adverb of manner answers the question ‘how’?</Text> */}
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="when, where, why "
      />
      </Text>


      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. I want to travel to a place <BoldTextHelper text="where"/> it is warm and sunny.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. That’s the shop <BoldTextHelper text="where"/> I bought my new sports shoes.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>3. I don’t know the reason <BoldTextHelper text="why"/> she went to Hyd.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. That’s the year <BoldTextHelper text="when"/> we got married.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>5. The store <BoldTextHelper text="where"/> I buy my groceries is closed.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>6. This is the garden <BoldTextHelper text="where"/> they took their photos.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>7. I have no idea <BoldTextHelper text="why"/> he called.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>8. Do you know (the time) <BoldTextHelper text="when"/> Raju came here.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>9. I really don't understand (the reason) <BoldTextHelper text="why"/> the cake I baked did not rise.</Text>
  

      <Text style={{fontSize:16,lineHeight:28,textAlign:"justify"}}>
      NOTE - 
      If your adjective clause doesn't identify its noun, offset it with commas. (If your adjective clause is headed by a relative adverb, it probably will identify its noun.)
      </Text>
    </View>
  </View>
      </ScrollView>
    </>
  )
}

export default RelativeAdverbs

const styles = StyleSheet.create({})