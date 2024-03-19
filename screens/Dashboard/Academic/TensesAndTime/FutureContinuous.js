import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";
const FutureContinuous = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Future Continuous Tense: (Sub + will /shall + V1 + ing)
        </Text>
        {/* <Text style={styles.normalText}>Present Continuous Tense is used in the following situations</Text> */}
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          (A) This tense is used to refer to an activity/event going on at particular time in the future.
          </Text>
         

          <Text style={styles.normalText}>
          1. We <UnderlineTextHelper text="shall be playing"/> the match at this time.
          </Text>
          <Text style={styles.normalText}>
          2. They <UnderlineTextHelper text="will be traveling"/> by train tomorrow by this time.
          </Text>
          <Text style={styles.normalText}>
          3. I <UnderlineTextHelper text="shall be staying"/> with my brother next year.
          </Text>
          
        </View>

        <View>
          <Text style={styles.sideHeading}>
          (B) These sentences also convey the sense of future planning or intention.
          </Text>
          <Text style={styles.normalText}>
          1. I <UnderlineTextHelper text="shall be meeting"/> the Prime Minister on Tuesday.
            
          </Text>
          <Text style={styles.normalText}>
          2. They <UnderlineTextHelper text="will be attending"/> a conference at Delhi next week.
          </Text>
          
        </View>

        

        
      </View>
    </ScrollView>
  );
};

export default FutureContinuous;

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
