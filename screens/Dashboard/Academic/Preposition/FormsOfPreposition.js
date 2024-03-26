import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react';
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';
import { PoppinsBold,PoppinsMedium } from '../../../../utils/FontHelper';
const SimplifiedComponent = ({sentence})=>{
  const sen = sentence.split(",");

  return(<>
   {sen.map((word,index)=>{
    return(<View key={index}>
      <Text key={index} style={{fontSize:16,color:HighLightColor}} >{sen[index]}</Text>
    </View>)
   })}
  </>)
}
const FormsOfPreposition = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
      <Text style={{fontSize:16,marginVertical:10}}>A Preposition has the following forms—</Text>

      <Text style={{fontSize:16,lineHeight:24}}>
      <BoldTextHelper 
            inputStyle={{color:"green",fontFamily:PoppinsMedium,textDecorationLine:"underline"}}


      text="A. Simple Prepositions"/>—Prepositions of one word are called <BoldTextHelper text="Simple Prepositions."
      inputStyle={{color:HighLightColor}}


      /> As— 
      </Text>
      <Text style={{fontSize:16,lineHeight:24,marginVertical:10}}>
      Ex : 
<BoldTextHelper text="In, of, to, at, by, for, from, off, on, out, through, till, up, with, down."
            inputStyle={{color:HighLightColor}}


/>

      </Text>



      <Text style={{fontSize:16,lineHeight:24}}>
     <BoldTextHelper text=" B. Compound Prepositions—" 
                  inputStyle={{color:"green",fontFamily:PoppinsMedium,textDecorationLine:"underline"}}


     />Prepositions formed by adding a Prefix to a Noun, Adjective or Adverb are called Compound Prepositions. Outwardly they look like one-word Prepositions, but in fact they are compound words. As— 
      </Text>
      <Text style={{fontSize:16,lineHeight:24,marginVertical:10}}>
      Ex : 
      <BoldTextHelper text=" About, above, across, along, amidst, among, amongst, around, before, behind, below, beneath, beside, between, beyond, inside, outside, underneath, within, without."
      inputStyle={{color:HighLightColor}}

      /> 
      </Text>



      
      <Text style={{fontSize:16,lineHeight:24}}>
      <BoldTextHelper text="C. Phrase Prepositions"
                        inputStyle={{color:"green",fontFamily:PoppinsMedium,textDecorationLine:"underline"}}



      />—Some Phrases also serve as Single Prepositions. As—
      </Text>
      <View style={{marginTop:8}}>
      <BoldTextHelper text="Ex:" fontSize={16} inputStyle={{color:"blue"}}/>
      <SimplifiedComponent
        sentence="According to, 
in consequence of,
agreeably to ,
in course of,
along with ,
in favour of,
away from ,
in front of,
because of ,
in lieu of,
by dint of ,
in order to,
by means of ,
in place of,
by reason of ,
in reference to,
by virtue of ,
in regard to,
by way of ,
in spite of,
conformably to,
instead of,
for the sake of ,
in the event of,
in accordance with ,
on account of,
in addition to ,
owing to,
in (on) behalf of ,
with a view to,
in case of ,
with an eye to,
in comparison to ,
with reference to,
in compliance with ,
with regard to"
      />
      </View>

      <Text style={{fontSize:16,lineHeight:24,marginVertical:10}}>
      <BoldTextHelper text="4. Participle Prepositions"
       inputStyle={{color:"green",fontFamily:PoppinsMedium,textDecorationLine:"underline"}}


      />—Some Present Participles are also used as Prepositions. As—
<BoldTextHelper 
inputStyle={{color:HighLightColor}}
text="Concerning, considering, barring, during, notwithstanding, pending, regarding, respecting, touching."/>

      </Text>

    </View>

    <View style={{paddingHorizontal:8}}>

    </View>
    </ScrollView>
  )
}

export default FormsOfPreposition

const styles = StyleSheet.create({})