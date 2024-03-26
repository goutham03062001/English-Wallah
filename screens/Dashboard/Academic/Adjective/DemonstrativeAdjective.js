import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';
const DemonstrativeAdjective = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15,lineHeight:29}}>An adjective used to point out which person or thing we speak about is known as demonstrative adjective. </Text>
    <Text style={{fontSize:16,marginVertical:15,lineHeight:29}}>They are of two types – Definite Demonstratives and Indefinite Demonstratives. The more common Definitive Demonstratives are these.

</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex:This, that, these, those, any, such, some"
      inputStyle={{color:HighLightColor}}

    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="This"/> book is very interesting.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="That"/> girl is very beautiful.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. <BoldTextHelper text="These"/> flowers are lovely.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. <BoldTextHelper text="Those"/> books are not mine.</Text>

<Text style={{fontSize:16,marginVertical:9,}}><BoldTextHelper text="Indefinite Demonstratives"/> are these – any, some, such, other, any other, a certain, etc.</Text>

<Text style={{fontSize:16,marginVertical:15,lineHeight:28}}>
Here it should be remembered that a singular Demonstrative should go with a singular noun, and a plural Demonstrative with a plural Noun. Therefore we cannot write this boys or these boy.
</Text>
<Text style={{fontSize:16}}>
A <BoldTextHelper text="certain" fontSize={17}/> book		                  	   <BoldTextHelper text="certain" fontSize={17}/> books
</Text>
<Text style={{fontSize:16}}>
The <BoldTextHelper text="other" fontSize={17}/> book		                    	the <BoldTextHelper text="other" fontSize={17}/> books
</Text>
<Text style={{fontSize:16}}>
<BoldTextHelper text="Such" fontSize={17}/> a boy		                        	    <BoldTextHelper text="such" fontSize={17}/> boys
</Text>
<Text style={{fontSize:16}}>
<BoldTextHelper text="Any" fontSize={17}/> man		                          	     <BoldTextHelper text="any" fontSize={17}/> men
</Text>
<Text style={{fontSize:16}}>
<BoldTextHelper text="The" fontSize={17}/> same boy		                      	<BoldTextHelper text="the" fontSize={17}/> same boys
</Text>
  </View>
</View>
  </ScrollView>
  )
}

export default DemonstrativeAdjective

const styles = StyleSheet.create({})