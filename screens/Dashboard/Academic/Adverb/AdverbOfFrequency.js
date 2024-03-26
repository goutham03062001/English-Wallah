import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import { HighLightColor } from '../utils/Colors';

const AdverbOfFrequency = () => {
  return (
    <>
     <ScrollView>
     <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverb of Frequency</Text>

        <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show how often an action is done is known as an adverb of Frequency.</Text>
        <Text style={{fontSize:16,marginVertical:15}}>**Adverb of frequency answers the question how often?</Text>
        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
              inputStyle={{color:HighLightColor}}

          text="Ex: Once, twice, thrice, often, always, occasionally, frequently, seldom, sometimes, rarely, firstly, secondly, never, again, usually, generally, almost, already, hardly, nearly, just, quite. "
        />
        </Text>


        <Text style={{fontSize:16,marginVertical:8}}>1. They talked to each other <BoldTextHelper text="again"/>.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>2. I <BoldTextHelper text="just"/> saw him at the gate.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>3. He has <BoldTextHelper text="already"/> finished his home work.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>4. He has <BoldTextHelper text="rarely"/> been coming to me.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>5. We <BoldTextHelper text="usually"/> go there.	</Text>
        <Text style={{fontSize:16,marginVertical:8}}>6. We visited Thirupathi <BoldTextHelper text="twice"/>.</Text>
        <Text style={{fontSize:16,marginVertical:8}}>7. They <BoldTextHelper text="never"/> go to films.</Text>        
      </View>
    </View> 
     </ScrollView>
    </>
  )
}

export default AdverbOfFrequency

const styles = StyleSheet.create({})