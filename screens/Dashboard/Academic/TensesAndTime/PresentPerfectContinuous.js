import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";

const PresentPerfectContinuous = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Present Perfect Continuous Tense:
(Subject + have / has + been + V4)

        </Text>
        <Text style={styles.normalText}>
        The present Perfect Tense is used to express the actions that began sometime in the past and are still continuing.
        </Text>
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          The present Perfect Tense is used to express the actions that began sometime in the past and are still continuing.
          </Text>
          

          <Text style={styles.normalText}>
          <BoldTextHelper text="Since: Point of time"/> (exact time)
          </Text>
          <Text style={styles.normalText}>
          <BoldTextHelper text="Ex: Since"/> morning / 4 pm / Monday / January / 2014 / last week etc.
          </Text>
          <Text style={styles.normalText}>
          <BoldTextHelper text="For: Period of time"/> (not exact time)
          </Text>
          <Text style={styles.normalText}>
          <BoldTextHelper text="Ex: for"/> one hour / two weeks / three months / four years / long time, many days etc.
          </Text>
         
          
          
        </View>

        <View style={{marginTop:30}}>
        
          <Text style={styles.normalText}>
          1. He <UnderlineTextHelper text="has been studying"/> since your childhood.
          </Text>
          <Text style={styles.normalText}>
          2. I <UnderlineTextHelper text="have been teaching"/>for 45 minutes.
          </Text>
          <Text style={styles.normalText}>
          3. It <UnderlineTextHelper text="has been raining"/> since morning.
          </Text>
          <Text style={styles.normalText}>
          4. She <UnderlineTextHelper text="has been playing"/> cricket for three hours.
          </Text>
          <Text style={styles.normalText}>
          5. We <UnderlineTextHelper text="have been living"/> Metpally since 1993.
          </Text>
          <Text style={styles.normalText}>
          6. How long <UnderlineTextHelper text="have"/> you <UnderlineTextHelper text="been working"/> here?
          </Text>
          
         
          
         
        </View>

       

        
      </View>
    </ScrollView>
  );
};

export default PresentPerfectContinuous;



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
