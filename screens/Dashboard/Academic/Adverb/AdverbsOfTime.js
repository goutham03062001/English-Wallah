import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import { HighLightColor } from "../utils/Colors";
const AdverbsOfTime = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Time</Text>

        <Text style={{fontSize:16,marginVertical:15}}>(When) An adverb used to show when an action is down is known as an adverb of time.</Text>
        <Text style={{fontSize:16,marginVertical:15}}>**Adverb of time answers the question when?	**</Text>
        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
                        inputStyle={{color:HighLightColor}}

          text="Ex: Now, then, today, tomorrow, day after tomorrow, early, soon, still, yet, before, late, ago, lately, daily, already, never, since, formerly, yesterday, presently, instantly, immediately, afterwards, when, whenever"
        />
        </Text>


        <Text style={{fontSize:17,marginVertical:8}}>1. He came very <BoldTextHelper text="late"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>2. I shall go there <BoldTextHelper tex="tomorrow"/></Text>
        <Text style={{fontSize:17,marginVertical:8}}>3. You must get up <BoldTextHelper text="early"/></Text>
        <Text style={{fontSize:17,marginVertical:8}}>4. I have seen him <BoldTextHelper text="before"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>5. She went a movement <BoldTextHelper text="ago"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>6. Let him start <BoldTextHelper text="now"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>7. He comes here <BoldTextHelper text="daily"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>8. I have told him <BoldTextHelper text="already"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>9. He will come <BoldTextHelper text="soon"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>10. They <BoldTextHelper text="always"/> go to church.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>11. He kicked me <BoldTextHelper text="yesterday"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>12. She is doing her work <BoldTextHelper text="then"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>13. That day he arrived <BoldTextHelper text="late"/>.</Text>
        <Text style={{fontSize:17,marginVertical:8}}>14. Wasted time <BoldTextHelper text="never"/> returns.</Text>
 
        
      </View>
    </View>
    </ScrollView>
  );
};

export default AdverbsOfTime;

const styles = StyleSheet.create({});
