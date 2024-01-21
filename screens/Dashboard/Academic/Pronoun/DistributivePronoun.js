import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import { ScrollView } from 'react-native-gesture-handler'
const DistributivePronoun = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
    <Text style={{fontSize:16,textAlign:"justify",lineHeight:27,marginVertical:10}}>
    A pronoun used to talk about each and every person separately is known as Distributive Pronoun.    </Text>
    <BoldTextHelper text="EX: each, every, any, one, everyone, everybody, none, everything, either, neither, both" fontSize={17} style={{padding:10,marginTop:10}}/>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Each" fontSize={18}/>
      <Text style={{fontSize:17,marginTop:19,lineHeight:27,textAlign:"justify"}}>
      “Each” refers to every one of a number of persons or things taken separately. Each means each without exception. Each is used in speaking about two or more things and it is used to pay attention to the individuals forming a group. Each is used if the number in the group is limited and definite.
      </Text>

    <Text style={{fontSize:17,marginTop:15}}>1. Each of us has a book.</Text>
    <Text style={{fontSize:17}}>2. Each should love his own country.</Text>
    {/* <Text style={{fontSize:17}}>3. <BoldTextHelper text="One"/> of my sisters is very beautiful.</Text> */}
    </View>
   {/* None */}
    <View style={{marginTop:15}}>
      <BoldTextHelper text="Every" fontSize={18}/>
      <Text>It is used only in speaking more than two and when the number is indefinite.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Every (one) of the Indians is brave.</Text>
    <Text style={{fontSize:17}}>2. Every (one) of the citizens should defend his mother land.</Text>
    {/* <Text style={{fontSize:17}}>3. <BoldTextHelper text="One"/> of my sisters is very beautiful.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Everybody" fontSize={18}/>
      <Text>it is used with a singular Verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Everybody house in the house was hungry.</Text>
      <Text style={{fontSize:17,marginTop:19}}>2. Everybody is interested in his own welfare.</Text>
    {/* <Text style={{fontSize:17}}>2. Nobody can be perfect in anything.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Everyone" fontSize={18}/>
      <Text>it is used with a singular Verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Everyone cheated me.</Text>
    <Text style={{fontSize:17}}>2. Everyone in the theatre clapped with joy.</Text>
    {/* <Text style={{fontSize:17}}>3. Nothing can be achieved without a strong desire.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Everything" fontSize={18}/>
      <Text>it is used with a singular Verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Everything was lost in the war.</Text>
    <Text style={{fontSize:17}}>2. She lost everything in life.</Text>
    </View>


    <View style={{marginTop:15}}>
      <BoldTextHelper text="Either" fontSize={18}/>
      <Text>Either means the one or the other of the two and it is used only in speaking about two persons or things.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Either of my two sisters is beautiful.</Text>
    <Text style={{fontSize:17}}>2. Either of you can answer my question.</Text>
     </View>
  

  
     <View style={{marginTop:15}}>
      <BoldTextHelper text="Neither" fontSize={18}/>
      <Text>Neither means not the one or the other of the two and it is the negative of the either. It is used to talk about only two persons or things.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Neither of my parents is educated.</Text>
    <Text style={{fontSize:17}}>2. Neither of us passed the exam.</Text>
     </View>

     <View style={{marginTop:15}}>
      <BoldTextHelper text="None" fontSize={18}/>
      <Text>It is used with a singular Verb to talk about more than two persons or things.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. None of the girls is married.</Text>
    <Text style={{fontSize:17}}>2. None of my stories was (or were) published.</Text>
     </View>


     <View style={{marginTop:15}}>
      <BoldTextHelper text="Any" fontSize={18}/>
      <Text>It is used to talk about more than two persons or things. </Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Any (one) of the books will tell you about India.</Text>
    <Text style={{fontSize:17}}>2. Any (one) of my sisters can marry you.</Text>
     </View>
    {/* <Text>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text> */}
  </View>
    </ScrollView>
  )
}

export default DistributivePronoun

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})