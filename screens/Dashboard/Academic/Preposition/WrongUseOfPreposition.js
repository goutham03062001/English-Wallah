import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { HighLightColor } from '../utils/Colors';
import { PoppinsBold,PoppinsLight,PoppinsMedium, PoppinsRegular } from '../../../../utils/FontHelper';
import BoldTextHelper from '../utils/BoldText';

const HelperComponent = ({inputText,target,avoid})=>{
  const words = inputText.split(' ');

    return (
        <Text>
            {words.map((word, index) => {
                const shouldHighlight = target && target.includes(word.replace(/[.,]/g, ''));
                return (
                    <Text key={index} style={{ fontWeight: shouldHighlight ? '300' : 'normal',fontSize:16 ,color:shouldHighlight?"red":"black",lineHeight:26,fontFamily:shouldHighlight?PoppinsRegular:''}}>
                        {word}{index !== words.length - 1 && ' '}
                    </Text>
                );
            })}
        </Text>
    );
}
const WrongUseOfPreposition = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
      <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}}>
      There are some Verbs which take no Preposition after them. They are—
      <BoldTextHelper
        inputStyle={{color:HighLightColor}}
        text="attack, await, accompany, assist, request, investigate, inform, obey, comprise, order, reach, resemble, resist, violate"
      />
      </Text>
      <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}} >
      It is wrong to use any Preposition after the above noted verbs, but this error is often committed.
      </Text>

      <HelperComponent
        inputText="1. America attacked on Iraq. (no ‘on’)"
        target="attacked on Iraq,(‘on’)"
      />
      <HelperComponent
        inputText="2. I await for your instructions. (no ‘for’)"
        target="await for,(‘for’)"
      />
      <HelperComponent
        inputText="3. I shall accompany with you. (no ‘with’)"
        target="accompany with you,(‘with’)"
      />
      <HelperComponent
        inputText="4. I shall assist to you. (no ‘to’)"
        target="assist to,(‘to’)"
      />
      <HelperComponent
        inputText="5. I request to you. (no ‘to’)"
        target="request to,(‘to’)"
      />
      <HelperComponent
        inputText="6. We shall investigate into the case. (no ‘into’)"
        target="investigate into ,(‘into’)"
      />
      <HelperComponent
        inputText="7. I shall inform to you. (no ‘to’)"
        target="assist to,(‘to’)"
      />
      <HelperComponent
        inputText="8. I shall obey to you. (no ‘to’)"
        target="obey to,(‘to’)"
      />
      <HelperComponent
        inputText="9. The group comprises of ten boys. (no ‘of’)"
        target="comprises of,(of)"
      />
      <HelperComponent
        inputText="10. I order to you. (no ‘to’)"
        target="order to,(‘to’)"
      />
      <HelperComponent
        inputText="11. I reached at the station. (no ‘at’)"
        target="reached at,(‘at’)"
      />
      <HelperComponent
        inputText="12. He resembles to you. (no ‘to’)"
        target="resembles to,(‘to’)"
      />
      <HelperComponent
        inputText="13. He will resist to you. (no ‘to’)"
        target="resist to,(‘to’)"
      />
      <HelperComponent
        inputText="14. He violated to the rule. (no ‘to’)"
        target="violated to,(‘to’)"
      />

    </View>
    </ScrollView>
  )
}

export default WrongUseOfPreposition

const styles = StyleSheet.create({})