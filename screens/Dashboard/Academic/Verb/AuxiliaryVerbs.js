import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { HighLightColor,SideHeadingColor } from '../utils/Colors';
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
const AuxiliaryVerbs = () => {
  return (
 <ScrollView>
     <View style={{paddingHorizontal:8,marginTop:8}}>
      <Text style={{fontSize:17,backgroundColor:SideHeadingColor}}>Auxiliary / Modal Verbs</Text>
      <Text style={{fontSize:16,marginVertical:10,lineHeight:29}}>
      Auxiliary or Modal Verbs are also called Helping Verbs because they help the Principal
verb.

      </Text>

      <Text style={{fontSize:16,marginVertical:10,lineHeight:29}}>
      “An Auxiliary Verb is one which (a) helps to form a tense or mood of some Principal Verb,
and (b) forgoes its own significance as a Principal Verb for that purpose.” (Nesfield)
As—

      </Text>
      <Text style={{fontSize:16}}>He <BoldTextHelper text="has"/> gone.</Text>

      <Text style={{fontSize:16,marginVertical:8,lineHeight:29}}>
      In this sentence <BoldTextHelper inputStyle={{color:HighLightColor}} text="has"/> is auxiliary verb and <BoldTextHelper inputStyle={{color:HighLightColor}} text="gone"/> Principal Verb. Here <BoldTextHelper inputStyle={{color:HighLightColor}} text="has"/>  helped the Principal Verb in making its <BoldTextHelper inputStyle={{color:HighLightColor}} text="Present Perfect Tense"/>, and in so doing it has lost its own identity as a Principal verb.
      </Text>


      <View style={{marginVertical:15}}>
      <Text style={{fontSize:17,fontWeight:"400",color:"red",backgroundColor:SideHeadingColor,color:"black"}}>
      Number of Auxiliary / Modal Verbs
      </Text>

      <Text style={{fontSize:16,marginTop:12,lineHeight:29}}>
      Auxiliary or Modal Verbs are 27 in number. They are :
am, is, are, was, were, have, has, had, will, shall, can,  would, should, could, may, might, must, do, does, did, <BoldTextHelper text="ought, need, dare, used, be, been, being."
      inputStyle={{color:HighLightColor}}
/>
These verbs (excluding be, been, being) are also called Anomalous Verbs.

      </Text>
      </View>


      <View style={{marginVertical:17}}>
      <Text style={{fontSize:17,fontWeight:"400",color:"red",backgroundColor:SideHeadingColor,color:"black"}}>
      Modal auxiliary verbs: 
      </Text>

      <Text style={{fontSize:16,marginTop:12}}>
      will, shall, can, would, should, could, may, might, must

      </Text>
      </View>

      <View style={{marginVertical:15,}}>
      <Text style={{fontSize:17,fontWeight:"400",color:"red",backgroundColor:SideHeadingColor,color:"black"}}>
      Quasi - modal auxiliary verbs
      </Text>

      <Text style={{fontSize:16,marginTop:12}}>
      ought to, need to, needs to, have to, has to, had to

      </Text>
      </View>
    </View>
 </ScrollView>
  )
}

export default AuxiliaryVerbs

const styles = StyleSheet.create({})