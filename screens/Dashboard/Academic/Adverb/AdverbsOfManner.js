import { StyleSheet, Text, ScrollView,View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
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
        text="Quickly, bravely, clearly, soundly, probably, happily, possibly, evidently, unfortunately, luckily, sadly, gracefully, beautifully, cheerfully, unwillingly, strongly, cowardly, slowly, nobly, lovingly, actively, "
      />
      </Text>


      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. She wrote it <BoldTextHelper text="well"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. He fought <BoldTextHelper text="bravely"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>3. She is <BoldTextHelper text="seriously"/> ill.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. I told him <BoldTextHelper text="thus"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>5. Rani smiles <BoldTextHelper text="beautifully"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>6. Do you think <BoldTextHelper text="so?"/></Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>7. She spent <BoldTextHelper text="happily"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>8. He reads <BoldTextHelper text="clearly"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>9. The story is <BoldTextHelper text="well"/> written.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>10. The child slept <BoldTextHelper text="soundly"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>11. Is that <BoldTextHelper text="so?"/></Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>12. The boy works <BoldTextHelper text="hard"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>13. <BoldTextHelper text="Thus"/> only, you will succeed.	</Text>
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>14. She is <BoldTextHelper text="extremely"/> angry with me.</Text>

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
