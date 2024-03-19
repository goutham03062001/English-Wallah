import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsRegular } from '../../../../utils/FontHelper';
const Adverb = () => {
  return (
    <ScrollView>
        <View style={{padding:10}}>
    <Text style={{textAlign:"center",fontSize:20,fontFamily:PoppinsRegular,color:"red"}}>Adverb Phrase</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>
    A group of words which does the work of an adverb is called an Adverb Phrase.
    </Text>

    <Text style={{marginTop:19,fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>With great speed,</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>On this spot,</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>In a very rude manner,</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>In all directions</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>Without any care,</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>In those days,	</Text>
    <Text style={{fontFamily:PoppinsRegular,fontSize:16,lineHeight:29,}}>At this very movement,</Text>
    
    <Text style={{fontSize:17,marginVertical:8}}>1. He was driving the car <UnderlineTextHelper text="with great speed"/>.</Text>
    <Text style={{fontSize:17,marginVertical:8}}>2. He jumped into the sea <UnderlineTextHelper text="without any care."/></Text>
    <Text style={{fontSize:17,marginVertical:8}}>3. The accident took place <UnderlineTextHelper text="on this spot."/></Text>
    <Text style={{fontSize:17,marginVertical:8}}>4. She frequently went to the temple <UnderlineTextHelper text="in those days."/></Text>
    <Text style={{fontSize:17,marginVertical:8}}>5. Rani spoke to me <UnderlineTextHelper text="in a very rude manner."/></Text>
    <Text style={{fontSize:17,marginVertical:8}}>6. I can pay the amount to you <UnderlineTextHelper text="at this very moment."/></Text>
    <Text style={{fontSize:17,marginVertical:8}}>7. The news of her sister’s elopement spread <UnderlineTextHelper text="in all directions."/></Text>
    </View>
    </ScrollView>
    // <></>
  )
}

export default Adverb

const styles = StyleSheet.create({})