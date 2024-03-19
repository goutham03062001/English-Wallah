import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";

const FuturePerfect = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Future Perfect Tense: (Sub + shall /will + have + V3)
        </Text>
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          (A) This tense is used to convey the sense of completion of an action by a certain point of time in future. Or for a future completed actions.
          </Text>
          

          <Text style={styles.normalText}>
          1. I <UnderlineTextHelper text="shall have reached"/> Hyderabad by this time tomorrow.
          </Text>
          <Text style={styles.normalText}>
          2. They <UnderlineTextHelper text="will have built"/> the house by the end of next year.
          </Text>
          <Text style={styles.normalText}>
          3. He <UnderlineTextHelper text="will have left"/> by the time you reach.
          </Text>
          <Text style={styles.normalText}>
          4. By 2010, the Outer Ring Road <UnderlineTextHelper text="will have been laid."/>
          </Text>
          <Text style={styles.normalText}>
          5. By next Monday, we <UnderlineTextHelper text="will have finished"/> our exams.
          </Text>
          
          
        </View>

        <View>
          <Text style={styles.sideHeading}>
          (B)This tense also conveys the sense of likelihood or probability. It refers to an action in the past.
          </Text>
          <Text style={styles.normalText}>
          1. You <UnderlineTextHelper text="will have met"/> my brother at Calcutta.
          </Text>
          <Text style={styles.normalText}>
          2. She <UnderlineTextHelper text="will have seen"/> the Taj.
          </Text>
          <Text style={styles.normalText}>
          3. He <UnderlineTextHelper text="will have been"/> at your residence.
          </Text>
          
         
          
         
        </View>

       

        
      </View>
    </ScrollView>
  );
};

export default FuturePerfect;



const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
  },
  mainHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "red",
    fontFamily: PoppinsRegular,
  },
  normalText: { fontSize: 16, lineHeight: 29, textAlign: "justify" },
  sideHeading: {
    fontWeight: "bold",
    fontSize: 17,
    textDecorationLine: "underline",
    marginVertical: 15,
    textAlign: "justify",
    lineHeight: 26,
  },
});
