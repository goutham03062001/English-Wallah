import { StyleSheet, Text, ScrollView,View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import { HighLightColor } from "../utils/Colors";
const AdverbsOfManner = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Manner: (How) </Text>

      <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show how an action is done is known as an adverb of manner.</Text>
      <Text style={{fontSize:16,marginVertical:15}}>Adverb of manner answers the question ‘how’?</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
      inputStyle={{color:HighLightColor}}
        text="Quickly, bravely, clearly, soundly, probably, happily, possibly, evidently, unfortunately, luckily, sadly, gracefully, beautifully, cheerfully, unwillingly, strongly, cowardly, slowly, nobly, lovingly, actively, "
      />
      </Text>


      <Text style={{fontSize:16,marginVertical:8}}>1. She wrote it <BoldTextHelper text="well"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>2. He fought <BoldTextHelper text="bravely"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>3. She is <BoldTextHelper text="seriously"/> ill.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>4. I told him <BoldTextHelper text="thus"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>5. Rani smiles <BoldTextHelper text="beautifully"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>6. Do you think <BoldTextHelper text="so?"/></Text>
      <Text style={{fontSize:16,marginVertical:8}}>7. She spent <BoldTextHelper text="happily"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>8. He reads <BoldTextHelper text="clearly"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>9. The story is <BoldTextHelper text="well"/> written.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>10. The child slept <BoldTextHelper text="soundly"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>11. Is that <BoldTextHelper text="so?"/></Text>
      <Text style={{fontSize:16,marginVertical:8}}>12. The boy works <BoldTextHelper text="hard"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>13. <BoldTextHelper text="Thus"/> only, you will succeed.	</Text>
      <Text style={{fontSize:16,marginVertical:8}}>14. She is <BoldTextHelper text="extremely"/> angry with me.</Text>

      <Text style={{fontSize:16,lineHeight:29}}>
      NOTE: This class includes nearly all those Adverbs which are derived from Adjectives and end in   _”ly”.
      </Text>
    </View>
  </View>
    </ScrollView>
  );
};

// An adverb used to show how an action is done is known as an adverb of manner.

// Adverb of manner answers the question ‘how’?

// Ex: Quickly, bravely, clearly, soundly, probably, happily, possibly, evidently, unfortunately, luckily, sadly, gracefully, beautifully, cheerfully, unwillingly, strongly, cowardly, slowly, nobly, lovingly, actively,

export default AdverbsOfManner;

const styles = StyleSheet.create({});
