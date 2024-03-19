import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";

const PastPerfectContinuous = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Past Perfect Continuous Tense:
(Subject + had + been + V4)


        </Text>
        
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          This tense is used to express an action started before a certain point of time in the past and continuing to the past moment.
          </Text>
     
          
          
        </View>

        <View style={{marginTop:30}}>
        
          <Text style={styles.normalText}>
          1. It <UnderlineTextHelper text="had been raining"/> for two hours.
          </Text>
          <Text style={styles.normalText}>
          2. He <UnderlineTextHelper text="had been teaching"/> at this school for ten years.
          </Text>
          <Text style={styles.normalText}>
          3. She <UnderlineTextHelper text="had been practicing"/> law for a number of years.
          </Text>
          <Text style={styles.normalText}>
          4. They <UnderlineTextHelper text="had been playing"/> cricket in England for five years.
          </Text>
          
          
         
          
         
        </View>

       

        
      </View>
    </ScrollView>
  );
};

export default PastPerfectContinuous;



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
