import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsRegular } from '../../../../utils/FontHelper';
const AdjectivePhrase = () => {
  return (
    <View style={{padding:10}}>
    <Text style={{textAlign:"center",fontSize:20,fontFamily:PoppinsRegular,color:"red"}}>Adjective Phrase</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>
    A group of words which does the work of an adjective is called an Adjective Phrase.
    </Text>

    <Text style={{marginTop:19,fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>With his wife and children,</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>With a powerful army,</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>In white dress</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>With long hair</Text>
    
    <Text style={{fontSize:17,marginVertical:8}}>1. The man <UnderlineTextHelper text="with his wife and children"/> is my uncle.</Text>
    <Text style={{fontSize:17,marginVertical:8}}>2. The girl <UnderlineTextHelper text="in white dress"/> is my elder sister.</Text>
    <Text style={{fontSize:17,marginVertical:8}}>3. The king <UnderlineTextHelper text="with a powerful army"/> tried to defeat his enemy.</Text>
    <Text style={{fontSize:17,marginVertical:8}}>4. I love the girls <UnderlineTextHelper text="with long hair."/></Text>
    </View>
  )
}

export default AdjectivePhrase

const styles = StyleSheet.create({})