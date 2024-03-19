import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";

const FuturePerfectContinuous = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Future Perfect Continuous Tense:
(Subject + will + have + been + V4)


        </Text>
        
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          This tense indicates the continuance of some action for a long time in future.
          </Text>
     
          
          
        </View>

        <View style={{marginTop:30}}>
        
          <Text style={styles.normalText}>
          1. He <UnderlineTextHelper text="will have been building"/> his house.
          </Text>
          <Text style={styles.normalText}>
          2. I <UnderlineTextHelper text="shall have been preparing"/> for my examination.
          </Text>

        </View>

       

        
      </View>
    </ScrollView>
  );
};

export default FuturePerfectContinuous;



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
