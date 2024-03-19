import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsRegular } from '../../../../utils/FontHelper';

const AdjectiveClause = () => {
  return (
    <ScrollView>
      <View style={{padding:10}}>
        <Text style={{textAlign:"center",fontSize:20,fontFamily:PoppinsRegular,color:"red"}}>Adjective Clause</Text>
      
        <Text style={{fontSize:16,lineHeight:29}}>
        A group of words which contains <UnderlineTextHelper text="a subject"/> and <UnderlineTextHelper text="a predicate"/> of its own and <BoldTextHelper text="does the work of an adjective"/> is called an <BoldTextHelper text="Adjective Clause."/>
        </Text>

        <Text>
          <BoldTextHelper text="Note : " inputStyle={{fontSize:18,padding:10}}/>
        </Text>
        <Text style={{fontSize:16}}>
        (1) An adjective Clause is introduced by relative pronouns like <BoldTextHelper text="who / whom / what / whose / which / that / but / as whoever / whichever / whatever / whichever and 
relative adverbs like where / when / why / what / how / whatever / wherever"/>

        </Text>

        <View>
          <Text style={{fontSize:16,marginVertical:8}}>1. The man <UnderlineTextHelper text="who invited you to dinner"/> is my uncle.</Text>
          <Text style={{fontSize:16,marginVertical:8}}>2. There is no one <UnderlineTextHelper text="who does not love Swapna."/></Text>
          <Text style={{fontSize:16,marginVertical:8}}>3. The girl <UnderlineTextHelper text="whom you saw in the park"/> is my sister.</Text>
          <Text style={{fontSize:16,marginVertical:8}}>4. I know <UnderlineTextHelper text="what you want to say."/></Text>
          <Text style={{fontSize:16,marginVertical:8}}>5. He is the man <UnderlineTextHelper text="whose house caught fire last night."/> </Text>
          <Text style={{fontSize:16,marginVertical:8}}>6. The story <UnderlineTextHelper text="which you wrote a year ago"/> is a nice one.</Text>
          <Text style={{fontSize:16,marginVertical:8}}>7. This is the book <UnderlineTextHelper text="that I told you about"/>.</Text>
          <Text style={{fontSize:16,marginVertical:8}}>8. There is none <UnderlineTextHelper text="but loves Murali"/>.</Text>
          <Text style={{fontSize:16,marginVertical:8}}>9. You can do <UnderlineTextHelper text="whatever you like."/></Text>
          <Text style={{fontSize:16,marginVertical:8}}>10. You can take <UnderlineTextHelper text="whichever you like."/></Text>
          <Text style={{fontSize:16,marginVertical:8}}>11. <UnderlineTextHelper text="Whoever comes here"/> is most welcome.</Text>
          <Text style={{fontSize:16,marginVertical:8}}>12. This is the place <UnderlineTextHelper text="where I met Jamuna."/></Text>
          <Text style={{fontSize:16,marginVertical:8}}>13. I want to know the time <UnderlineTextHelper text="when the meeting will take place."/></Text>
          <Text style={{fontSize:16,marginVertical:8}}>14. I don’t know the reason <UnderlineTextHelper text="why Rajkumar disliked her."/></Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default AdjectiveClause

const styles = StyleSheet.create({})