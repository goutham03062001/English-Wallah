import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import { ScrollView } from 'react-native-gesture-handler'
const InterrogativePronoun = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
    <Text style={{fontSize:16,textAlign:"justify",lineHeight:27,marginVertical:10}}>
    A pronoun used to make a question is known as an Interrogative Pronoun.    </Text>
    <BoldTextHelper text="EX: who, whose, which, whom, what" fontSize={17} style={{padding:10,marginTop:10}}/>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Who" fontSize={18}/>
      <Text style={{fontSize:17,marginTop:19}}>1. Who was the first Prime Minister of India?</Text>
    <Text style={{fontSize:17}}>2. <BoldTextHelper text="One"/> 2. Who is known as the Father of the Nation?</Text>
    {/* <Text style={{fontSize:17}}>3. <BoldTextHelper text="One"/> of my sisters is very beautiful.</Text> */}
    </View>
   {/* None */}
    <View style={{marginTop:15}}>
      <BoldTextHelper text="Whom" fontSize={18}/>
      <Text>It is used for persons in objective case.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Whom do you want to see?</Text>
    <Text style={{fontSize:17}}>2. Whom do you wish to marry?</Text>
    {/* <Text style={{fontSize:17}}>3. <BoldTextHelper text="One"/> of my sisters is very beautiful.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Whose" fontSize={18}/>
      <Text>It is used in possessive case.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Whose are these books?</Text>
    {/* <Text style={{fontSize:17}}>2. Nobody can be perfect in anything.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Which" fontSize={18}/>
      <Text>It is used both for persons and things.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Which is the longest river in India?</Text>
    <Text style={{fontSize:17}}>2. Which is the tallest building in India?</Text>
    {/* <Text style={{fontSize:17}}>3. Nothing can be achieved without a strong desire.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="What" fontSize={18}/>
      <Text>It is used for the things.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. What do you expect me to do?</Text>
    <Text style={{fontSize:17}}>2. What can I give you?</Text>
    <Text style={{marginVertical:16,fontSize:16,lineHeight:26,textAlign:"justify"}}>
    What are you and who are you: ‘what are you’ refers to your profession and ‘who are you’ refers your name and other particulars.
    </Text>
    <Text style={{fontSize:17}}>3. What is she? She is a teacher.</Text>
    <Text style={{fontSize:17}}>4. Who is she? She is Rani.</Text>  

    </View>

  
    {/* <Text>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text> */}
  </View>
    </ScrollView>
  )
}

export default InterrogativePronoun

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})