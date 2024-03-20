import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import { ScrollView } from 'react-native-gesture-handler'
const IndefinitePronoun = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
    <Text style={{fontSize:16,textAlign:"justify",lineHeight:27,marginVertical:10}}>
    A pronoun is used to talk about a person or thing indefinitely is known as Indefinite Pronoun.    </Text>
    <BoldTextHelper
      inputStyle={{color:"#0165E1"}}   
     text="EX: one, everyone, everybody, someone. Somebody, anyone, anybody, no one, nobody, none, everything, something, nothing, anything, some, many, several, other, any, no other, no, few, both, few, all, another." fontSize={17} style={{padding:10,marginTop:10}}/>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="One" fontSize={18}/>
      <Text style={{fontSize:17,marginTop:19}}>1. <BoldTextHelper text="One"/> has to be careful about one’s health</Text>
    <Text style={{fontSize:17}}>2. <BoldTextHelper text="One"/> must know what one has to do.</Text>
    <Text style={{fontSize:17}}>3. <BoldTextHelper text="One"/> of my sisters is very beautiful.</Text>
    </View>
   {/* None */}
    <View style={{marginTop:15}}>
      <BoldTextHelper text="None" fontSize={18}/>
      <Text>It means not one. It is used with a singular or plural verb but singular is commoner.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. <BoldTextHelper text="None"/> of my parents is (or are) educated.</Text>
    <Text style={{fontSize:17}}>2. <BoldTextHelper text="None"/> of my sister is (or are) beautiful.</Text>
    {/* <Text style={{fontSize:17}}>3. <BoldTextHelper text="One"/> of my sisters is very beautiful.</Text> */}
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Nobody" fontSize={18}/>
      <Text>It means not one. And it is used with a singular verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. <BoldTextHelper text="Nobody"/> helped me.</Text>
    <Text style={{fontSize:17}}>2. <BoldTextHelper text="Nobody"/> can be perfect in anything.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Nothing" fontSize={18}/>
      <Text>It means not anything and it is used with a singular Verb. </Text>
      <Text style={{fontSize:17,marginTop:19}}>1. <BoldTextHelper text="Nobody"/> is as sweet as honey.</Text>
    <Text style={{fontSize:17}}>2. <BoldTextHelper text="Nobody"/> has been written about his early life.</Text>
    <Text style={{fontSize:17}}>3. <BoldTextHelper text="Nobody"/> can be achieved without a strong desire.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="No One" fontSize={18}/>
      <Text>It means not a single person and it is used with a singular Verb </Text>
      <Text style={{fontSize:17,marginTop:19}}>1. No one is ready to help me.</Text>
    <Text style={{fontSize:17}}>2. No one can live without money.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Some" fontSize={18}/>
      <Text>It is used with a plural Verb. </Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Some are born great.</Text>
    <Text style={{fontSize:17}}>2. Some achieve greatness by hard work.</Text>
    <Text style={{fontSize:17}}>3. Some failed in the exam.</Text>
    </View>


    <View style={{marginTop:15}}>
      <BoldTextHelper text="SomeOne" fontSize={18}/>
      <Text>It is used with a singular Verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Someone opened the door.</Text>
    <Text style={{fontSize:17}}>2. Someone threw a stone at me.</Text>
    <Text style={{fontSize:17}}>3. Someone is calling you.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Something" fontSize={18}/>
      <Text>It is used with a singular verb. </Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Something must be done about it.</Text>
    <Text style={{fontSize:17}}>2. Something should be given to the patient.</Text>
    <Text style={{fontSize:17}}>3. Something is better than nothing.</Text>
    </View>


    <View style={{marginTop:15}}>
      <BoldTextHelper text="Somebody" fontSize={18}/>
      <Text>It is used with a singular verb </Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Somebody escaped from prison.</Text>
    <Text style={{fontSize:17}}>2. Somebody took away my bike.</Text>
    <Text style={{fontSize:17}}>3. Somebody is calling you.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Any" fontSize={18}/>
      <Text>It is used with singular verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Any (one) of you can do that.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Anybody" fontSize={18}/>
      <Text style={{fontSize:17,marginTop:19}}>1. Anybody can speak in his mother tongue.</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. Anybody can tell you about my uncle.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Anything" fontSize={18}/>
      <Text style={{fontSize:17,marginTop:19}}>1. Have you got anything to teach us?</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. Have you brought anything for me from Delhi?</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Anyone" fontSize={18}/>
      <Text>It is used with singular verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Can anyone of you teach me the poem?</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. Can anyone of you tell me this address?</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="All" fontSize={18}/>
      <Text>It is used with plural verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. All are equal in the eyes of law.</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. All of you can stay with us.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Few" fontSize={18}/>
      <Text>It is used with plural verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Few escaped from the danger.</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. Few attended the function.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Many" fontSize={18}/>
      <Text>It is used with plural verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Many of us believe in God.</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. Many of the students are unmarried.</Text>
      <Text style={{fontSize:17,marginTop:1}}>3. Many of them passed the exam.</Text>
      <Text style={{fontSize:17,marginTop:1}}>4. Many of my poems are published.</Text>
    </View>

    <View style={{marginTop:15}}>
      <BoldTextHelper text="Several" fontSize={18}/>
      <Text>It is used with plural verb.</Text>
      <Text style={{fontSize:17,marginTop:19}}>1. Several of the girls are beautiful.</Text>
      <Text style={{fontSize:17,marginTop:1}}>2. Several of us have faith in rebirth</Text>
      <Text style={{fontSize:17,marginTop:1}}>3. Several Indians are illiterate.</Text>
      {/* <Text style={{fontSize:17,marginTop:1}}>4. Many of my poems are published.</Text> */}
    </View>
    {/* <Text>1.I saw <BoldTextHelper text="myself"/> in the mirror.</Text> */}
  </View>
    </ScrollView>
  )
}

export default IndefinitePronoun

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})