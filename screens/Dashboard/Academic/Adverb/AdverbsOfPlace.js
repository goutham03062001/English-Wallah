import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import { HighLightColor } from '../utils/Colors';

const AdverbsOfPlace = () => {
  return (
   <ScrollView>
     <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Place: (where) </Text>

      <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show where an action is done is known as an Adverb of place.</Text>
      <Text style={{fontSize:16,marginVertical:15}}>Adverb of place answers the question where?	</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        inputStyle={{color:HighLightColor}}

        text="Ex: Here, there, up, down, near, far, below, above, away, out, in, everywhere, backward, within, by, where, hence, thence, hither, thither, inside, outside, "
      />
      </Text>


      <Text style={{fontSize:16,marginVertical:8}}>1. He lives <BoldTextHelper text="here"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>2. She looked for him <BoldTextHelper text="everywhere"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>3. They went <BoldTextHelper text="out"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>4. I saw <BoldTextHelper text="inside"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>5. She went a movement <BoldTextHelper text="ago"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>6. It will be <BoldTextHelper text="somewhere"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>7. I found him <BoldTextHelper text="nowhere"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>8. They all went <BoldTextHelper text="away"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>9. I searched for it up and <BoldTextHelper text="down"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>10. It is near the <BoldTextHelper text="shop"/>.</Text>
      <Text style={{fontSize:16,marginVertical:8}}>11. There is a snake <BoldTextHelper text="beneath"/> the stone.	</Text>
      <Text style={{fontSize:16,marginVertical:8}}>12. Is Raju <BoldTextHelper text="within?"/></Text>
      <Text style={{fontSize:16,marginVertical:8}}>13. Come <BoldTextHelper text="in"/>.</Text>

      
    </View>
  </View>
   </ScrollView>
  );
};

export default AdverbsOfPlace;

const styles = StyleSheet.create({});
